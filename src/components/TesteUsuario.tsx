import type { Usuario } from "../types/Usuario.ts";
import { apresentarUsuario } from "../types/Usuario.ts";

function TesteUsuario() {
  const usuario: Usuario = {
    id: 1,
    nome: "Daniel",
    email: "daniel@email.com",
    idade: 18
  };

  return <p>{apresentarUsuario(usuario)}</p>;
}

export default TesteUsuario;