import express from "express";
import databaseAtlas from "./src/database/database.js";
import routerUser from "./src/routes/routes.user.js";
import routerFilmes from "./src/routes/routes.filmes.js";
import routerAuth from "./src/routes/routes.auth.js";

databaseAtlas();
const centerFilmes = express();

centerFilmes.use(express.json());

const port = 3000;
centerFilmes.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

centerFilmes.use("/login", routerAuth);

centerFilmes.use("/user", routerUser);
centerFilmes.use("/user", routerUser);
centerFilmes.use("/findall", routerUser);
centerFilmes.use("/find", routerUser);
centerFilmes.use("/user", routerUser);

centerFilmes.use("/create", routerFilmes);
