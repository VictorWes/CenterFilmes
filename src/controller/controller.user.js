import {
  createUserService,
  findallUsersService,
  findByIdService,
  renameUserService,
  deleteUserService,
} from "../services/services.user.js";

const createUserController = async (req, res) => {
  try {
    let { nome, usuario, email, password, dataNascimento } = req.body;

    if (!nome || !usuario || !email || !password || !dataNascimento) {
      res.status(400).send({
        message:
          "Por favor preencha o campo corretamente, esta faltando algum campo a ser preenchido!",
      });
    }
    const createUser = await createUserService(req.body);

    res.status(200).send({ message: "Usuario criado com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAllUsersController = async (req, res) => {
  try {
    const findUsers = await findallUsersService();

    if (findUsers.length > 0) {
      res.status(200).send(findUsers);
    } else {
      res.status(400).send({ message: "Não foi encontrado ID" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findByIdController = async (req, res) => {
  try {
    let { id } = req.params;

    const findId = await findByIdService(id);

    if (!id) {
      res.status(400).send({ message: "ID não encontrado" });
    }

    res.status(200).send(findId);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const renameUserController = async (req, res) => {
  try {
    let id = req.params.id;
    let { nome, usuario, email, password, dataNascimento } = req.body;

    const findUser = await findByIdService(id);

    if (!findUser) {
      res.status(400).send({ message: "Uusario não localizado" });
    }

    if (!nome && !usuario && !email && !password && !dataNascimento) {
      res.status(400).send({ message: "Por favor preencha todos os campos " });
    }

    await renameUserService(id, nome, usuario, email, password, dataNascimento);

    res.status(200).send({ message: "Usuario atualizado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteUserControlller = async (req, res) => {
  try {
    const id = req.params.id;

    const findId = await findByIdService(id)
    if (!findId) {
      res.status(400).send({ message: "Usuario não localizado" });
    }

    const deleteUser = await deleteUserService(id);
    res.status(200).send({ message: "Usuario deletado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
export {
  createUserController,
  findAllUsersController,
  findByIdController,
  renameUserController,
  deleteUserControlller,
};
