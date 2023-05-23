import centerFilmes from "../models/Model.filmes.js";
import { v4 as uuidv4 } from "uuid";

const createFilmeService = (body) => centerFilmes.create(body);
const findAllFilmesService = () => centerFilmes.find();
const findByIdFilmeService = (id) => centerFilmes.findById(id);
const updateFilmeService = (id, nome, ano, genero, diretor, sobre) =>
  centerFilmes.findOneAndUpdate(
    { _id: id },
    { nome, ano, genero, diretor, sobre }
  );
const deleteFilmeService = (id) => centerFilmes.findOneAndDelete({ _id: id });

const likeFilmeService = (idFilme, userId) =>
  centerFilmes.findOneAndUpdate(
    { _id: idFilme, "like.userId": { $nin: [userId] } },
    { $push: { like: { userId, created: new Date() } } }
  );
const deleteLikeService = (idFilme, userId) =>
  centerFilmes.findOneAndUpdate(
    { _id: idFilme },
    { $pull: { like: { userId } } }
  );

const procurarFilmePorNomeService = (nome) =>
  centerFilmes
    .find({ nome: { $regex: `${nome || ""}`, $options: "i" } })
    .sort({ _id: -1 });

const comentariosService = (idFilme, userId, comentarios) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);
  return centerFilmes.findOneAndUpdate(
    { _id: idFilme },
    {
      $push: {
        comentarios: { idComment, comentarios, userId, created: new Date() },
      },
    }
  );
};
const deleteComentarioService = (idFilme, idComment, userId) =>
  centerFilmes.findOneAndUpdate(
    { _id: idFilme },
    { $pull: { comentarios: { idComment, userId } } }
  );

export {
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
};
