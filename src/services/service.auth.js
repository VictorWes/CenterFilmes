import userCenter from "../models/model.user.js";
import jwt from "jsonwebtoken";

const findForLogin = (email) =>
  userCenter.findOne({ email: email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id: id }, "0ca4cfdb1bfd5bd656cc80eca148d7b1", {
    expiresIn: 86400,
  });

export { findForLogin, generateToken };
