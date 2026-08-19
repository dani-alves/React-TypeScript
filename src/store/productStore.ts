//store productStore

import { create } from "zustand";
import  type { ProductFormData } from "../utils/validation.ts";

interface Product extends ProductFormData {
  id: number;
}

interface ProductState {
  products: Product[];
  addProduct: (product: ProductFormData) => void;
  removeProduct: (id: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],

  addProduct: (product: ProductFormData) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...product,
          id: Date.now(), 
        },
      ],
    })),

  removeProduct: (id: number) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
}));