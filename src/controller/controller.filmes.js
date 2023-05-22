import {createFilmeService} from "../services/service.filmes.js"

const createFilmeController = async (req, res) => {
  try {
    let { nome, ano, genero, diretor, sobre, like, estrelas, comentarios } =
      req.body;

    if (
      !nome ||
      !ano ||
      !genero ||
      !diretor ||
      !sobre ||
      !like ||
      !estrelas ||
      !comentarios
    ) {
      return res.status(400).send({
        message: "Por gentileza preencha todos os campos corretamente!",
      });
    }

    const createFilme = await createFilmeService(req.body);
    res.status(200).send(createFilme);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { createFilmeController };
