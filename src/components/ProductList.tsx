//componente lista

import { useProductStore } from "../store/productStore.ts";

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  const removeProduct = useProductStore((state) => state.removeProduct);

  if (products.length === 0) {
    return <p>Nenhum produto adicionado ainda.</p>;
  }

  return (
    <div>
      <h2>Produtos Adicionados</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>
            <strong>R$ {product.price.toFixed(2)}</strong>
          </p>
          <button onClick={() => removeProduct(product.id)} style={{ cursor: "pointer", color: "red" }}>
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}