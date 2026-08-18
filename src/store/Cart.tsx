import useCartStore from "../store/cartStore";

export default function Cart() {
  // Pega items, total e removeItem direto da loja
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div>
      <h2>Carrinho</h2>
      
      {items.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
              <h4>{item.nome}</h4>
              <p>R$ {item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
          ))}
          
          <h3>Total: R$ {total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}