import { useEffect, useState } from "react";
import type { Categoria } from "../../models/Categoria";
import {
  getCategorias,
  deleteCategoria,
} from "../../services/CategoriaService";
import CardCategoria from "./CardCategoria";
import FormCategoria from "./FormCategoria";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [editarCategoria, setEditarCategoria] = useState<
    Categoria | undefined
  >();

  const loadCategorias = async () => {
    const data = await getCategorias();
    setCategorias(data);
  };

  const handleDelete = async (id: number) => {
    await deleteCategoria(id);
    loadCategorias();
  };

  const handleEdit = (categoria: Categoria) => {
    setEditarCategoria(categoria);
  };

  useEffect(() => {
    loadCategorias();
  }, []);

  return (
    <div>
      <FormCategoria
        categoriaEditar={editarCategoria}
        onSuccess={loadCategorias}
      />
      <h1 className="text-2xl font-bold mb-4">Categorias</h1>
      {categorias.map((cat) => (
        <CardCategoria
          key={cat.id}
          categoria={cat}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default ListaCategorias;
