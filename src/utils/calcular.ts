export function somar(a: number, b: number) {
  return a + b;
}

export function subtrair(a: number, b: number) {
  return a - b;
}

export function multiplicar(a: number, b: number) {
  return a * b;
}

export function dividir(a: number, b: number): number | null {
  if (b === 0) return null;
  return a / b;
}