import { Router } from "express";
import {
  createFilmeController,
  findByIdFilmeController,
  findAllFilmesController,
  updateFilmeController,
  deleteFilmeController,
  likeFilmeController,
  procurarFilmePorNomeController
} from "../controller/controller.filmes.js";
import { authMiddleware } from "../middlewares/middlewares.auth.js";

const routerFilmes = Router();

routerFilmes.patch("/like/:id", likeFilmeController);
routerFilmes.post("/filme", authMiddleware, createFilmeController);
routerFilmes.get("/unique/:id", findByIdFilmeController);
routerFilmes.get("/allfilmes", findAllFilmesController);
routerFilmes.patch("/filme/:id", authMiddleware, updateFilmeController);
routerFilmes.delete("/filme/:id", authMiddleware, deleteFilmeController);
routerFilmes.get("/pesquisar", procurarFilmePorNomeController)

export default routerFilmes;
