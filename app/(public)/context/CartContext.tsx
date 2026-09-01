"use client"
import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void; 
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]); // 2. setCart is declared here

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id? {...i, qty: i.qty + item.qty} : i);
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(i => i.id!== id));
  
  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id? {...i, qty} : i));
  };

  const clearCart = () => { // 3. MOVE IT INSIDE HERE
    setCart([]); 
    localStorage.removeItem("cart");
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}