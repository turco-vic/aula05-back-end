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

  app.get("/doces", (req, res) => {
    return res.status(201).json(guloseimas);
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