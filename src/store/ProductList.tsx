import useCartStore from "../store/cartStore";

export default function ProductList() {
  const addItem = useCartStore((state) => state.addItem);

  const products = [
    { id: 1, nome: "Notebook", price: 2500 },
    { id: 2, nome: "Mouse", price: 50 },
    { id: 3, nome: "Teclado", price: 150 },
  ];

  return (
    <div>
      <h2>Produtos</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{product.nome}</h3>
          <p>R$ {product.price}</p>
          <button onClick={() => addItem(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
}

