import { useMemo } from "react";
import { CartItem } from "@/stores/cartStore";

export const useTotalPrice = (cart: CartItem[]) => {
  return useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.optionPrice * item.quantity,
      0
    );
  }, [cart]);
};

export const useTotalCount = (cart: CartItem[]) => {
  return useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);
};
