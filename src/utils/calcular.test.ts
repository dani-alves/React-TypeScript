import { describe, it, expect } from "vitest";
import { somar, subtrair, multiplicar,dividir } from "./calcular";

describe("somar", () => {
  it("deve somar dois números", () => {
    const resultado = somar(5, 3);
    expect(resultado).toBe(8);
  });

  it("deve lidar com números negativos", () => {
    const resultado = somar(-5, 3);
    expect(resultado).toBe(-2);
  });
});

describe("subtrair", () => {
  it("deve retornar 6", () => {
    const resultado = subtrair(10, 4);
    expect(resultado).toBe(6);
  });
});

describe("multiplicar", () => {
  it("deve retornar 12", () => {
    const resultado = multiplicar(3, 4);
    expect(resultado).toBe(12);
  });
});


describe("dividir", () => {
  it("deve retornar 5", () => {
    const resultado = dividir(10, 2);
    expect(resultado).toBe(5);
  });

  it("deve retornar null (não pode dividir por zero)", () => {
    const resultado = dividir(10, 0);
    expect(resultado).toBe(null);
  });
});