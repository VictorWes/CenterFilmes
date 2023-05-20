import { Router } from "express";
import { createUserController, findAllUsersController } from "../controller/controller.user.js";
const routerUser = Router();

routerUser.post("/create", createUserController);
routerUser.get("/users", findAllUsersController)

export default routerUser;
