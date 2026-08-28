"use client";
import { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved){  setCart(JSON.parse(saved));
      // try {
      //    
      // } catch (error) {
      //   console.error("Failed to parse cart", error);
      //   localStorage.removeItem ("cart");
      // }
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + item.qty } : p,
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) =>
    setCart((prev) => prev.filter((p) => p.id !== id));
  const updateQty = (id: number, qty: number) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
