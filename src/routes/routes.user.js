import { Router } from "express";
import {
  createUserController,
  findAllUsersController,
  findByIdController,
  renameUserController,
  deleteUserControlller
} from "../controller/controller.user.js";
const routerUser = Router();

routerUser.patch("/uptade/:id", renameUserController);
routerUser.post("/create", createUserController);
routerUser.get("/users", findAllUsersController);
routerUser.get("/user/:id", findByIdController);
routerUser.delete("/delete/:id", deleteUserControlller)


export default routerUser;
