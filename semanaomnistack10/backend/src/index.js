const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
// Métodos HTTP: get, post, put, delete

// Tipos de parãmetros:

// Query params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-evb32.mongodb.net/wiki10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json()); //express precisa vir sempre antes das rotas!
app.use(routes);

app.listen(3333);
