import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 letras"),
  email: z.string().email("Email inválido"),
 age: z.coerce.number().min(18, "Você deve ter no mínimo 18 anos"),
});

type LoginData = z.input<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

    const onSubmit = (data: LoginData) => {
    console.log("Dados válidos:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

    <input {...register("nome")} placeholder="nome" />
      {errors.nome && <span>{errors.nome.message}</span>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <input {...register("age")} type="number" placeholder="idade" />
      {errors. age && <span>{errors. age.message}</span>}

      <button type="submit">Entrar</button>
    </form>
  );

}