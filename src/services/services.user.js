import userCenter from "../models/model.user.js"

const createUserService = (body) => userCenter.create(body)
const findallUsersService = () => userCenter.find()

export {createUserService, findallUsersService}