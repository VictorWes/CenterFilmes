import { Router } from "express";
import { createFilmeController } from "../controller/controller.filmes.js";
import { authMiddleware } from "../middlewares/middlewares.auth.js";

const routerFilmes = Router();

routerFilmes.post("/filme", authMiddleware, createFilmeController);

export default routerFilmes;
