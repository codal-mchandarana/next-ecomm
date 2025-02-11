'use client';
import { createContext, type JSX, useState } from 'react';
import type { CartItems, Product } from '@/lib/types';
import { calculatePrice } from '@/lib/utility';
import { useToast } from '@/hooks/use-toast';

export const CartContext = createContext<CartItems>({
  carts: [],
  AddToCart: () => {},
  AddToCartQty: () => {},
  DeleteCartItems: () => {},
  IncrementCartItemQuantity: () => {},
  DecrementCartItemQuantity: () => {},
  TotalPrice: 0,
});

const CartContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  const [items, setItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { toast } = useToast();

  const AddToCart = (item: Product): void => {
    const cartItemIndex = items.findIndex((product) => product.id === item.id);

    if (cartItemIndex !== -1) {
      const quantity = items[cartItemIndex].qty || 0;
      items[cartItemIndex] = { ...items[cartItemIndex], qty: quantity + 1 };
      setItems(items);
    } else {
      const newObj = { ...item, qty: 1 };
      setItems([...items, newObj]);
    }

    let price: number = parseInt(item.price);
    if (item.discount) {
      price = calculatePrice(item.price, item.discount);
    }
    setTotalPrice((prev) => prev + price);
  };

  const AddToCartQty = (item: Product): void => {
    const cartItemIndex = items.findIndex((product) => product.id === item.id);

    if (cartItemIndex != -1) {
      const quantity = items[cartItemIndex].qty || 0;
      items[cartItemIndex] = {
        ...items[cartItemIndex],
        qty: quantity + (item?.qty || 0),
      };
    } else {
      setItems([...items, item]);
    }
    let price: number = parseInt(item.price);
    if (item.discount) {
      price = calculatePrice(item.price, item.discount);
    }
    setTotalPrice((prev) => prev + price * (item.qty || 1));
  };

  const DeleteCartItems = (id: number): void => {
    const item: Product | null =
      items.find((element) => element.id === id) ?? null;

    setItems((prevItems) => prevItems.filter((val) => val.id !== id));

    let price: number = Number(item?.price?.replace(/,/g, ''));
    if (item?.discount) {
      price = calculatePrice(item.price, item.discount);
    }
    setTotalPrice((prev) => prev - price * (item?.qty ?? 1));
  };

  const DecrementCartItemQuantity = (id: number): void => {
    const cartItemIndex = items.findIndex((product) => product.id === id);

    if (cartItemIndex !== -1) {
      const item: Product = items[cartItemIndex];
      const quantity = items[cartItemIndex].qty || 0;
      if (quantity > 1) {
        items[cartItemIndex] = { ...items[cartItemIndex], qty: quantity - 1 };
        setItems(items);
      } else {
        setItems((prevItems) => prevItems.filter((val) => val.id !== id));
        toast({
          title: `${item.title} removed from cart`,
          variant: 'destructive',
          duration: 2000,
        });
      }

      let price: number = parseInt(item.price);
      if (item.discount) {
        price = calculatePrice(item.price, item.discount);
      }
      setTotalPrice((prev) => prev - price);
    }
  };

  const IncrementCartItemQuantity = (id: number): void => {
    const cartItemIndex = items.findIndex((product) => product.id === id);

    if (cartItemIndex !== -1) {
      const quantity = items[cartItemIndex].qty || 0;
      items[cartItemIndex] = { ...items[cartItemIndex], qty: quantity + 1 };
      setItems(items);

      const item: Product = items[cartItemIndex];

      let price: number = parseInt(item.price);
      if (item.discount) {
        price = calculatePrice(item.price, item.discount);
      }
      setTotalPrice((prev) => prev + price);
    }
  };

  const ctxValue: CartItems = {
    carts: items,
    AddToCart,
    AddToCartQty,
    DeleteCartItems,
    IncrementCartItemQuantity,
    DecrementCartItemQuantity,
    TotalPrice: totalPrice,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
