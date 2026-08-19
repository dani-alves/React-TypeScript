//compoenente produtoForme

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { productSchema, type ProductFormData } from "../utils/validation";
import { useProductStore } from "../store/productStore";

export default function ProductForm() {
  const addProduct = useProductStore((state) => state.addProduct);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.input<typeof productSchema>, any, ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormData) => {
    addProduct(data);
    reset(); // Limpa o formulário
    alert("Produto adicionado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
      <h2>Adicionar Novo Produto</h2>

      <div>
        <input
          {...register("title")}
          placeholder="Título do produto"
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />
        {errors.title && <span style={{ color: "red" }}>{errors.title.message}</span>}
      </div>

      <div>
        <input
          {...register("price")}
          type="number"
          placeholder="Preço"
          step="0.01"
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />
        {errors.price && <span style={{ color: "red" }}>{errors.price.message}</span>}
      </div>

      <div>
        <textarea
          {...register("description")}
          placeholder="Descrição"
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />
        {errors.description && <span style={{ color: "red" }}>{errors.description.message}</span>}
      </div>

      <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
        Adicionar Produto
      </button>
    </form>
  );
}