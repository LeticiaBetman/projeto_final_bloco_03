import { useState, useEffect } from "react";
import type { Categoria } from "../../models/Categoria";
import { postCategoria, putCategoria } from "../../services/CategoriaService";

interface FormCategoriaProps {
  categoriaEditar?: Categoria;
  onSuccess?: () => void;
}

function FormCategoria({ categoriaEditar, onSuccess }: FormCategoriaProps) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (categoriaEditar) {
      setNome(categoriaEditar.nome);
      setDescricao(categoriaEditar.descricao);
    }
  }, [categoriaEditar]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    if (categoriaEditar) {
      await putCategoria({ id: categoriaEditar.id, nome, descricao });
    } else {
      await postCategoria({ nome, descricao });
    }
    setNome("");
    setDescricao("");
    if (onSuccess) onSuccess(); 
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">
        {categoriaEditar ? "Atualizar Categoria" : "Cadastrar Categoria"}
      </h2>
      <div className="mb-2">
        <label className="block font-semibold">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Descrição</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        {categoriaEditar ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}

export default FormCategoria;
