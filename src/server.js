import express from "express";
import { config } from "dotenv";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const guloseimas = [
  {
    id: 1,
    nome: "Trufa",
    preco: 7.77
  },
  {
    id: 2,
    nome: "Gud-gud",
    preco: 10.50
  },
  {
    id: 3,
    nome: "Geleia-caioba",
    preco: 5
  },
];

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
]


app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello, World!" });
});

app.get("/doces", (req, res) => {
  return res.status(200).json(guloseimas);
});

app.get("/filmes", (req, res) => {
  return res.status(200).json(filmes);
});

app.post("/doces", (req, res) => {
  const {nome, preco} = req.body

  const novoDoce = {
    id : guloseimas.length + 1,
    nome: nome, 
    preco: preco,
  }

  guloseimas.push(novoDoce);
  return res.status(200).json(filmes);
})

app.listen(serverPort, () => {
  console.log(`💖💋 Server started on http://localhost:${serverPort}💖💋`);
});