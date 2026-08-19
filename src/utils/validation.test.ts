import { describe, it, expect } from "vitest";
import { productSchema } from "./validation";

describe("productSchema", () => {
  it("deve validar um produto correto", () => {
    const validProduct = {
      title: "Notebook",
      price: "1500.00",
      description: "Um notebook muito bom",
    };

    const result = productSchema.safeParse(validProduct);
    expect(result.success).toBe(true);
  });

  it("deve rejeitar título com menos de 3 caracteres", () => {
    const invalidProduct = {
      title: "PC",
      price: "1500",
      description: "Um produto",
    };

    const result = productSchema.safeParse(invalidProduct);
    expect(result.success).toBe(false);
  });

  it("deve rejeitar preço menor ou igual a 0", () => {
    const invalidProduct = {
      title: "Produto",
      price: "0",
      description: "Uma descrição valida",
    };

    const result = productSchema.safeParse(invalidProduct);
    expect(result.success).toBe(false);
  });

  it("deve rejeitar descrição com menos de 5 caracteres", () => {
    const invalidProduct = {
      title: "Produto",
      price: "100",
      description: "abc",
    };

    const result = productSchema.safeParse(invalidProduct);
    expect(result.success).toBe(false);
  });
});