import express from "express";
import { config } from "dotenv";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());



const filmes = [
  {
    id: 1002,
    titulo: "Meu irmão urso",
    genero: "Animação",
    emCartaz: false
  },
  {
    id: 1003,
    titulo: "DeadPool and Wolverine",
    genero: "Ação",
    emCartaz: true,
  },
  {
    id: 1004,
    titulo: "É assim que acaba",
    genero: "Romance",
    emCartaz: true,
  }
];


app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello, World!" });
});



app.get("/filmes", (req, res) => {
  return res.status(200).json(filmes);
});



app.listen(serverPort, () => {
  console.log(`💖💋 Server started on http://localhost:${serverPort}💖💋`);
});