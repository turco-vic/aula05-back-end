import { Router } from "express";

const docesRoutes = Router();

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

 docesRoutes.get("/", (req, res) => {
    return res.status(201).json(guloseimas);
  });

 docesRoutes.post("/", (req, res) => {
    const {nome, preco} = req.body
  
    const novoDoce = {
      id : guloseimas.length + 1,
      nome: nome, 
      preco: preco,
    }
  
    guloseimas.push(novoDoce);
    return res.status(201).send(guloseimas);
  })
  export default docesRoutes