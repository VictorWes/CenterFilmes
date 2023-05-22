import bcrypt from "bcrypt";
import { findForLogin, generateToken } from "../services/service.auth.js";

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findForLogin(email);

    if (!user) {
      return res.status(400).send({ message: "email invalido" });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).send({ message: "Senha  invalido" });
    }

    const checkJwt = await generateToken(user.id);
    res.status(200).send({ checkJwt });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { loginUserController };
