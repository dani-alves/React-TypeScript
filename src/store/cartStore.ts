import { create } from "zustand";

interface Product {
  id: number;
  nome: string;
  price: number;
}

interface CartState {
  items: Product[];
  total: number;
}

interface CartActions {
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
}

interface CartStore extends CartState, CartActions {}

const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,

  addItem: (product: Product) =>
    set((state) => ({
      items: [...state.items, product],
      total: state.total + product.price,
    })),

  removeItem: (id: number) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      total: state.total - (state.items.find((item) => item.id === id)?.price || 0),
    })),
}));

export default useCartStore;