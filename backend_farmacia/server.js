import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // Permite acesso do frontend
app.use(express.json()); // Lê JSON no body

// "Banco de dados" em memória
let categorias = [];

// ===== ROTAS =====

// GET todas categorias
app.get("/categorias", (req, res) => {
  res.json(categorias);
});

// POST nova categoria
app.post("/categorias", (req, res) => {
  const novaCategoria = { id: Date.now(), ...req.body };
  categorias.push(novaCategoria);
  res.status(201).json(novaCategoria);
});

// PUT atualizar categoria
app.put("/categorias/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = categorias.findIndex((c) => c.id === id);

  if (index !== -1) {
    categorias[index] = { ...categorias[index], ...req.body };
    res.json(categorias[index]); // retorna o item atualizado
  } else {
    res.status(404).json({ message: "Categoria não encontrada" });
  }
});

// DELETE categoria
app.delete("/categorias/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = categorias.findIndex((c) => c.id === id);

  if (index !== -1) {
    const deletado = categorias.splice(index, 1);
    res.json({ message: "Categoria deletada", categoria: deletado[0] });
  } else {
    res.status(404).json({ message: "Categoria não encontrada" });
  }
});

// ===== INICIAR BACKEND =====
app.listen(4000, () => {
  console.log("Backend rodando em http://localhost:4000");
});
