import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((prevItem) => {
          if (prevItem.id === item.id) {
            return { ...prevItem, amount: prevItem.amount + item.amount };
          }
          return prevItem;
        });
      }
      return [...prevItems, item];
    });
  };
  const removeItemHandler = (id) => {};
  const clearCartHandler = () => {};
  const contextValue = {
    items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
