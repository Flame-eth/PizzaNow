import { CartItemType, ProductType } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItemType[];
  addItem: (product: ProductType, size: CartItemType["size"]) => void;
  updateQuantity: (id: string, quantity: -1 | 1) => void;
};
const CardContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItemType[]>([]);

  const addItem = (product: ProductType, size: CartItemType["size"]) => {
    const newCartItem: CartItemType = {
      product,
      size,
      quantity: 1,
      product_id: product.id,
      id: randomUUID(),
    };

    const existingItem = items.find(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingItem) {
      setItems(
        items.map((item) => {
          if (item.product.id === product.id && item.size === size) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      setItems([...items, newCartItem]);
    }
  };

  const updateQuantity = (id: string, quantity: -1 | 1) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  return (
    <CardContext.Provider
      value={{
        items,
        addItem: (product: ProductType, size: CartItemType["size"]) => {
          addItem(product, size);
        },
        updateQuantity: (id: string, quantity: -1 | 1) => {
          updateQuantity(id, quantity);
        },
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CardContext);
