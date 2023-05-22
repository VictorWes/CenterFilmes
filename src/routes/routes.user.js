import { Router } from "express";
import {
  createUserController,
  findAllUsersController,
  findByIdController,
  renameUserController,
  deleteUserControlller,
} from "../controller/controller.user.js";
import { authMiddleware } from "../middlewares/middlewares.auth.js";
const routerUser = Router();

routerUser.patch("/uptade/:id", renameUserController);
routerUser.post("/create", createUserController);
routerUser.get("/users", authMiddleware, findAllUsersController);
routerUser.get("/user/:id", authMiddleware, findByIdController);
routerUser.delete("/delete/:id", authMiddleware, deleteUserControlller);

export default routerUser;
