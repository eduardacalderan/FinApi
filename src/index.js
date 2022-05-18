import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World -  Fundamentos Node.js" });
});

app.listen(3333);
