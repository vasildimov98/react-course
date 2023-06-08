import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  isCartOpen: false,
  addItem: (item) => {},
  removeItem: (id) => {},
  onOpenCart: () => {},
  onCloseCart: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const isCartOpen = localStorage.getItem("isCartOpen");

    if (isCartOpen) {
      setOpenCart(true);
    }

    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((prevItem) => {
          if (prevItem.id === item.id) {
            return { ...prevItem, amount: prevItem.amount + 1 };
          }
          return prevItem;
        });
      } else {
        updatedItems = [...prevItems, item];
      }

      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeItemHandler = (id) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem.amount === 1) {
      setItems((prevItems) => {
        const updatedItems = prevItems.filter((item) => item.id !== id);
        localStorage.setItem("items", JSON.stringify(updatedItems));
        return updatedItems;
      });
    }
    if (existingItem.amount > 1) {
      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        localStorage.setItem("items", JSON.stringify(updatedItems));
        return updatedItems;
      });
    }
  };

  const openCartHandler = () => {
    setOpenCart(true);
    localStorage.setItem("isCartOpen", true);
  };

  const closeCartHandler = () => {
    setOpenCart(false);
    localStorage.removeItem("isCartOpen");
  };

  const clearCartHandler = () => {
    setItems([]);
    localStorage.removeItem("items");
  };

  const contextValue = {
    items,
    totalAmount: items.reduce((acc, item) => acc + item.price * item.amount, 0),
    isCartOpen: openCart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    onOpenCart: openCartHandler,
    onCloseCart: closeCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
