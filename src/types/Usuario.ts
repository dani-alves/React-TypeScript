interface Usuario {
    id: number
    nome: string
    email:string
    idade:number
}


function apresentarUsuario(usuario: Usuario): string {
  return `Olá, ${usuario.nome}! Você tem ${usuario.idade} anos`;
}


export type { Usuario };
export { apresentarUsuario };