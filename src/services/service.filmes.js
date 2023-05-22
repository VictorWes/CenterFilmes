import centerFilmes from "../models/Model.filmes.js";

const createFilmeService = (body) => centerFilmes.create(body);

export { createFilmeService };
