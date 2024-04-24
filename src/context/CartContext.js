import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex((prod) => prod.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((prod) => prod.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
