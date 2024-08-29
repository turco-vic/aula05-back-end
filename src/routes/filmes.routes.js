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

  app.get("/filmes", (req, res) => {
    return res.status(200).json(filmes);
  });