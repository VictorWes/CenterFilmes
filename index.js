import express from "express";
import databaseAtlas from "./src/database/database.js";
import routerUser from "./src/routes/routes.user.js"

databaseAtlas();
const centerFilmes = express();

centerFilmes.use(express.json());

const port = 3000;
centerFilmes.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


centerFilmes.use("/user", routerUser)
centerFilmes.use("/findall", routerUser)