import mongoose from "mongoose";

const databaseAtlas = () => {
  console.log("Por favor aguarde estamos connectando ao BD");

  mongoose
    .connect(
      "mongodb+srv://Wesdev:drago200@centerfilmes.jqmrldx.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Mongo conectado"))
    .catch((error) => console.log(error));
};

export default databaseAtlas