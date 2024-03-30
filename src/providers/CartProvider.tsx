import { CartItemType, ProductType } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type CartType = {
  items: CartItemType[];
  addItem: (product: ProductType, size: CartItemType["size"]) => void;
};
const CardContext = createContext<CartType>({
  items: [],
  addItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItemType[]>([]);

  const addItem = (product: ProductType, size: CartItemType["size"]) => {
    const newCartIrem: CartItemType = {
      product,
      size,
      quantity: 1,
      product_id: product.id,
      id: Math.random().toString(36),
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
      setItems([...items, newCartIrem]);
    }
    }



  return (
    <CardContext.Provider value={{ items: [], addItem: () => {} }}>
      {children}
    </CardContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CardContext);
