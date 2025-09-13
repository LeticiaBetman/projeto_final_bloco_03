import axios from "axios";
import type { Categoria } from "../models/Categoria";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const getCategorias = async (): Promise<Categoria[]> => {
  const resposta = await api.get<Categoria[]>("/categorias");
  return resposta.data;
};

export const postCategoria = async (categoria: Omit<Categoria, "id">) => {
  const resposta = await api.post("/categorias", categoria);
  return resposta.data;
};

export const putCategoria = async (categoria: Categoria) => {
  const resposta = await api.put(`/categorias/${categoria.id}`, categoria);
  return resposta.data;
};

export const deleteCategoria = async (id: number) => {
  const resposta = await api.delete(`/categorias/${id}`);
  return resposta.data;
};
