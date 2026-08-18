import { useQuery } from "@tanstack/react-query";

interface Usuario {
  id: number;
  name: string;
  email: string;
  // ... outros campos se precisar
}

function Usuarios() {
  const { data: usuarios, isLoading, error } = useQuery({
    queryKey: ["usuarios"],
    queryFn: () => 
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(r => r.json())
  });

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar!</p>;

  return (
    <ul>
      {usuarios?.map((u: Usuario) => (  // ✅ Tipado!
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default Usuarios;