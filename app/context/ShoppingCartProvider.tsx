"use client";
import { ReactNode, createContext, useContext } from "react";
import useLocalStorage from "../hooks/LocalStorageHook";
import { StaticImageData } from "next/image";

interface ShoppingCartProps {
  children: ReactNode;
}

interface ShoppingCartContext {
  cartQuantity: number;
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (id: number, product: Product, quantity: number) => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

interface Product {
  name: string;
  price: number;
  img: StaticImageData;
}

interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useLocalStorage("ProductsCart", []);

  function addToCart(id: number, product: Product, quantity: number) {
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find((e: CartItem) => e.id === id) === undefined)
        return [...currItems, { id, product: product, quantity: quantity }];
      return currItems.map((item: CartItem) => {
        if (item.id === id) return { ...item, quantity: quantity };
        return item;
      });
    });
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems: CartItem[]) =>
      currItems.map((item: CartItem) => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        return item;
      })
    );
  }

  function decreaseCartQuantity(id: number) {
    if (cartItems.find((e: CartItem) => e.id === id)?.quantity === 1)
      removeFromCart(id);
    else
      setCartItems((currItems: CartItem[]) => {
        return currItems.map((item: CartItem) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 };
          return item;
        });
      });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems: CartItem[]) => {
      return currItems.filter((item: CartItem) => item.id !== id);
    });
  }

  const cartQuantity = cartItems.reduce(
    (q: number, i: CartItem) => q + i.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (q: number, i: CartItem) => q + i.quantity * i.product.price,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        totalPrice,
        addToCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
