import {
  createFilmeService,
  findByIdFilmeService,
  findAllFilmesService,
  updateFilmeService,
  deleteFilmeService,
  likeFilmeService,
  procurarFilmePorNomeService,
  deleteLikeService,
  comentariosService,
  deleteComentarioService,
  
} from "../services/service.filmes.js";

const createFilmeController = async (req, res) => {
  try {
    let { nome, ano, genero, diretor, sobre } = req.body;

    if (!nome || !ano || !genero || !diretor || !sobre) {
      return res.status(400).send({
        message: "Por gentileza preencha todos os campos corretamente!",
      });
    }

    const createFilme = await createFilmeService({
      nome,
      ano,
      genero,
      diretor,
      sobre,

      user: req.userId,
    });

    res.status(200).send(createFilme);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findByIdFilmeController = async (req, res) => {
  try {
    let { id } = req.params;

    const findId = await findByIdFilmeService(id);
    if (!findId) {
      return res.status(400).send({ message: "Usuario não localizado!" });
    }

    res.status(200).send(findId);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAllFilmesController = async (req, res) => {
  try {
    const allFilmes = await findAllFilmesService();

    if (allFilmes <= 0) {
      return res
        .status(400)
        .send({ message: "Não existe filmes a serem mostrados" });
    }
    res.send({
      result: allFilmes.map((item) => ({
        id: item._id,
        nome: item.nome,
        ano: item.ano,
        genero: item.genero,
        diretor: item.diretor,
        sobre: item.sobre,
        like: item.like,
        estrelas: item.estrelas,
        comentarios: item.comentarios,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateFilmeController = async (req, res) => {
  try {
    let { id } = req.params;

    let { nome, ano, genero, diretor, sobre } = req.body;
    const findId = await findByIdFilmeService(id);
    if (!findId) {
      res.status(400).send({ message: "Uusario não localizado" });
    }
    if (!nome && !ano && !genero && !diretor && !sobre) {
      res.status(400).send({ message: "Por favor preencha todos os campos " });
    }

    const filmeAtualizadoPor = { user: req.userId };

    await updateFilmeService(id, nome, ano, genero, diretor, sobre);
    res.status(200).send({
      message: `Filme atualizado com sucesso`,
      filmeAtualizadoPor,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteFilmeController = async (req, res) => {
  try {
    let { id } = req.params;

    const findId = await findByIdFilmeService(id);
    if (!findId) {
      res.status(400).send({ message: "Usuario não localizado" });
    }
    const filmeDeletadoPor = { user: req.userId };

    const deleteFilme = await deleteFilmeService(id);
    res
      .status(200)
      .send({ message: "Filme deletado com sucesso!", filmeDeletadoPor });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const likeFilmeController = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const filmeLiked = await likeFilmeService(id, userId);

    if (!filmeLiked) {
      await deleteLikeService(id, userId);
      return res.status(200).send({ message: "Like removido com sucesso" });
    }

    res.send({ message: "Like feito com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const procurarFilmePorNomeController = async (req, res) => {
  try {
    const { nome } = req.query;

    const filme = await procurarFilmePorNomeService(nome);

    if (filme.length === 0) {
      return res
        .status(400)
        .send({ message: "Não foi possivel localizar nenhum filme!" });
    }

    return res.send({
      Filmes: filme.map((item) => ({
        id: item._id,
        nome: item.nome,
        ano: item.ano,
        genero: item.genero,
        diretor: item.diretor,
        sobre: item.sobre,
        comentarios: item.comentarios,
        like: item.like,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const comentariosController = async (req, res) => {
  try {
    const { id } = req.params;
    let { comentarios } = req.body;
    const userId = req.userId;

    const createComentario = await comentariosService(id, userId, comentarios);

    res.status(200).send({ message: "Comentario incluido com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteComentarioController = async (req, res) => {
  try {
    const { idFilme, idComment } = req.params;

    const userId = req.userId;

    const deleComment = await deleteComentarioService(
      idFilme,
      idComment,
      userId
    );

    res.status(200).send({ message: "Comentario deletado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



export {
  createFilmeController,
  findByIdFilmeController,
  findAllFilmesController,
  updateFilmeController,
  deleteFilmeController,
  likeFilmeController,
  procurarFilmePorNomeController,
  comentariosController,
  deleteComentarioController,
 
};
