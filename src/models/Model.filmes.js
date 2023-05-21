import mongoose, { mongo } from "mongoose";

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
  sobre: {
    type: String,
    require: true,
  },
  estrelas: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Filmes", centerFilmes);
