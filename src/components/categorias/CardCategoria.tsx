import type { Categoria } from "../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
  onDelete: (id: number) => void;
  onEdit?: (categoria: Categoria) => void;
}

function CardCategoria({ categoria, onDelete, onEdit }: CardCategoriaProps) {
  return (
    <div className="border p-4 rounded mb-2 flex justify-between items-center bg-white">
      <div>
        <h2 className="font-bold">{categoria.nome}</h2>
        <p>{categoria.descricao}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={() => onEdit && onEdit(categoria)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(categoria.id)}
        >
          Deletar
        </button>
      </div>
    </div>
  );
}

export default CardCategoria;
