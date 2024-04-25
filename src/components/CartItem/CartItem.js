import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeItem, updateItemQuantity } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  const handleUpdateQuantity = (newQuantity) => {
    updateItemQuantity(id, newQuantity);
  };

  const totalProductPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={img} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">{name}</h2>
        <h2 className="cart-item-price">Precio: ${price}</h2>
        <div className="cart-item-quantity">
          <button className="cart-item-quantity-button" onClick={() => handleUpdateQuantity(quantity - 1)}>-</button>
          <h2>{quantity}</h2>
          <button className="cart-item-quantity-button" onClick={() => handleUpdateQuantity(quantity + 1)}>+</button>
        </div>
        <h2 className="cart-item-total">${totalProductPrice}</h2> {/* Precio total */}
      </div>
      <button className="cart-item-remove-button" onClick={handleRemoveItem}>X</button>
    </div>
  );
};

export default CartItem;
