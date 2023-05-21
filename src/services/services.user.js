import userCenter from "../models/model.user.js";

const createUserService = (body) => userCenter.create(body);
const findallUsersService = () => userCenter.find();
const findByIdService = (id) => userCenter.findById(id);
const renameUserService = (
  id,
  nome,
  usuario,
  email,
  password,
  dataNascimento
) =>
  userCenter.findOneAndUpdate(
    { _id: id },
    { nome, usuario, email, password, dataNascimento }
  );

const deleteUserService = (id) => userCenter.findOneAndDelete({ _id: id });
export {
  createUserService,
  findallUsersService,
  findByIdService,
  renameUserService,
  deleteUserService,
};
