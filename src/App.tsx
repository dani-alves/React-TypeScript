import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>📦 Gerenciador de Produtos</h1>
      <ProductForm />
      <hr />
      <ProductList />
    </div>
  );
}