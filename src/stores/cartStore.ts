// store/cartStore.ts
import { create } from "zustand";

export interface CartItem {
  id: string; // 고유한 id 필드 추가
  menuId: string; // menuId 추가
  menuName: string;
  categoryId: string;
  optionName: string;
  optionPrice: number;
  quantity: number;
  optionId: string; // optionId 필드 추가
  recommendation: string; // recommendation 필드 추가
}

interface CartState {
  cart: CartItem[];
  addToCart: (
    menuId: string, // menuId 추가
    menuName: string,
    categoryId: string,
    optionName: string,
    optionPrice: number,
    quantity: number,
    optionId: string, // optionId 추가
    recommendation: string // recommendation 추가
  ) => void;
  removeFromCart: (id: string) => void; // menuId와 optionId로 삭제
  increaseQuantity: (id: string) => void; // 수량 증가
  decreaseQuantity: (id: string) => void; // 수량 감소
  clearCart: () => void;
}

const cartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (
    menuId,
    menuName,
    categoryId,
    optionName,
    optionPrice,
    quantity,
    optionId,
    recommendation
  ) =>
    set((state) => {
      const id = `${Date.now()}-${Math.random()}`; // 고유 id 생성

      // Check if the exact same option already exists in the cart
      const existingOption = state.cart.find(
        (item) => item.menuId === menuId && item.optionId === optionId
      );

      if (existingOption) {
        // Update the quantity if the option already exists
        return {
          cart: state.cart.map((item) =>
            item.menuId === menuId && item.optionId === optionId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        // Add a new option to the cart with a unique id
        return {
          cart: [
            ...state.cart,
            {
              id, // 고유 id
              menuId, // menuId 추가
              menuName,
              categoryId,
              optionName,
              optionPrice,
              quantity,
              optionId, // optionId 추가
              recommendation, // recommendation 추가
            },
          ],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));

export default cartStore;
