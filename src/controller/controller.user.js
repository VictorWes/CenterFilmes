import { trusted } from "mongoose";
import {
  createUserService,
  findallUsersService,
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

export { createUserController, findAllUsersController };
