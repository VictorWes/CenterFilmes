import { Router } from "express";
import {
  createFilmeController,
  findByIdFilmeController,
  findAllFilmesController,
  updateFilmeController,
  deleteFilmeController,
  likeFilmeController,
  procurarFilmePorNomeController,
  comentariosController,
  deleteComentarioController,
  estrelasFilmeController,
} from "../controller/controller.filmes.js";
import { authMiddleware } from "../middlewares/middlewares.auth.js";

const routerFilmes = Router();

routerFilmes.patch(
  "/comentarios/:idFilme/:idComment",
  authMiddleware,
  deleteComentarioController
);
routerFilmes.patch("/estrelas/:id", authMiddleware, estrelasFilmeController);
routerFilmes.patch("/comentarios/:id", authMiddleware, comentariosController);
routerFilmes.patch("/like/:id", authMiddleware, likeFilmeController);
routerFilmes.post("/filme", authMiddleware, createFilmeController);
routerFilmes.get("/unique/:id", findByIdFilmeController);
routerFilmes.get("/allfilmes", findAllFilmesController);
routerFilmes.patch("/filme/:id", authMiddleware, updateFilmeController);
routerFilmes.delete("/filme/:id", authMiddleware, deleteFilmeController);
routerFilmes.get("/pesquisar", procurarFilmePorNomeController);

export default routerFilmes;
