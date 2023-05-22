import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userCenter = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  usuario: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  dataNascimento: {
    type: String,
    require: true,
  },
});

userCenter.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

export default mongoose.model("Usuarios", userCenter);
