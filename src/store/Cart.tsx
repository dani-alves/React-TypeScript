import useCartStore from "../store/cartStore";

interface CartItem {
  id: string | number;
  nome: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  removeItem: (id: CartItem["id"]) => void;
}

export default function Cart() {
  // 1️⃣ Pegue os items e total da loja
  const items: CartItem[] = useCartStore((state: CartState) => state.items);
  const total: number = useCartStore((state: CartState) => state.total);
  
  // 2️⃣ Pegue a função removeItem
  const removeItem: CartState["removeItem"] = useCartStore((state: CartState) => state.removeItem);

  return (
    <div>
      <h2>Carrinho</h2>
      
      {/* 3️⃣ Se o carrinho tá vazio, mostra mensagem */}
      {items.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          {/* 4️⃣ Lista os itens com map */}
          {items.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
              <h4>{item.nome}</h4>
              <p>R$ {item.price}</p>
              {/* 5️⃣ Botão pra remover */}
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
          ))}
          
          {/* 6️⃣ Mostra o total */}
          <h3>Total: R$ {total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}