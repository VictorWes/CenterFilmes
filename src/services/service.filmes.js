import centerFilmes from "../models/Model.filmes.js";

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
  centerFilmes
    .findOneAndUpdate(
      { _id: idFilme, "likes.userId": { $nin: [userId] } },
      { $push: { likes: { userId, created: new Date() } } }
    )
    .populate("user");
const procurarFilmePorNomeService = (nome) =>
  centerFilmes
    .find({ nome: { $regex: `${nome || ""}`, $options: "i" } })
    .sort({ _id: -1 })
    .populate("user");

export {
  createFilmeService,
  findByIdFilmeService,
  findAllFilmesService,
  updateFilmeService,
  deleteFilmeService,
  likeFilmeService,
  procurarFilmePorNomeService,
};
