import mongoose from "mongoose";

const centerFilmes = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
    unique: true,
  },
  ano: {
    type: String,
    require: true,
  },
  genero: {
    type: String,
    require: true,
  },
  diretor: {
    type: String,
    require: true,
  },
  sobre: {
    type: String,
    require: true,
  },
  like: {
    type: Array,
    require: true,
  },
  estrelas: {
    type: Array,
    require: true,
  },
  comentarios: {
    type: Array,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Filmes", centerFilmes);
