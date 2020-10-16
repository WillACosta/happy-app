import express from "express";

import "../src/database/conection";

const app = express();

app.get("/users", (req, res) => {
  res.status(200).send("Ok!");
});

app.listen(4000);
