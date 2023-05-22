import { Router } from "express";
import { loginUserController } from "../controller/controller.auth.js";
const routerAuth = Router();

routerAuth.post("/admins", loginUserController);

export default routerAuth;
