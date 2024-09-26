import { Router } from "express";

const docesRoutes = Router();

let guloseimas = [
  {
    id: Number(Math.floor(Math.random() * 99)) + 1,
    nome: "Trufa",
    preco: 7.77
  },
  {
    id: Number(Math.floor(Math.random() * 99)) + 1,
    nome: "Gud-gud",
    preco: 10.50
  },
  {
    id: Number(Math.floor(Math.random() * 99)) + 1,
    nome: "Geleia-caioba",
    preco: 5,
  },
];

//Rota para buscar todos os elementos do array guloseimas
docesRoutes.get("/", (req, res) => {
  return res.status(201).json(guloseimas);
});

//Rota para criar nova guloseima
docesRoutes.post("/", (req, res) => {
  const { nome, preco } = req.body

  const novoDoce = {
    id: guloseimas.length + 1,
    nome,
    preco,
  }

  guloseimas.push(novoDoce);
  return res.status(201).send(guloseimas);
});

//Rota para buscar um elemento específico do array guloseimas
docesRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const guloseima = guloseimas.find((doce) => doce.id === Number(id));


  if (!guloseima) {
    return res.status(404).send({ message: "Guloseima não encontrada!" });
  }

  return res.status(200).send(guloseima);
});

//Rota para editar uma guloseima
docesRoutes.put("/:id", (req, res) => {
  const { id } = req.params

  const guloseima = guloseimas.find((doce) => doce.id === Number(id)
  );


  if (!guloseima) {
    return res.status(404).send({ message: "Guloseima não encontrada!" });
  };

  const { nome, preco } = req.body

  guloseima.nome = nome
  guloseima.preco = preco

  return res.status(200).send({
    message: "Guloseima atualizada!",
    guloseima,
  })

});

//Rota para deletar uma guloseima
docesRoutes.delete("/:id", (req, res) => {
  const { id } = req.params

  const guloseima = guloseimas.find((doce) => doce.id === Number(id)
  );

  if (!guloseima) {
    return res.status(404).send({ message: "Guloseima não encontrada!" });
  }

  guloseimas = guloseimas.filter((doce) => doce.id !== Number(id));


  return res.status(200).send({
    message: "Guloseima deletada!",
    guloseima,
  })
})
export default docesRoutes;