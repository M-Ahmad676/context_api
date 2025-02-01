import React, { useState, createContext } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [item, setItem] = useState(0);

  const handleCart = () => {
    setItem(item + 1);
  };

  return (
    <cartContext.Provider value={{ item, handleCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
