import React, { useState, createContext, useEffect } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [item, setItem] = useState(() => {
    return JSON.parse(sessionStorage.getItem("item")) || 0
  });
       
  useEffect(() => {
      sessionStorage.setItem("item",JSON.stringify(item))
  },[item])
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
