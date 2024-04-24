import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  const totalProductPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={img} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">{name}</h2>
        <h2 className="cart-item-price">Precio: ${price}</h2>
        <h2 className="cart-item-quantity">Cantidad: {quantity}</h2>
        <h2 className="cart-item-total">Total: ${totalProductPrice}</h2> {/* Precio total */}
      </div>
      <button className="cart-item-remove-button" onClick={handleRemoveItem}>X</button>
    </div>
  );
};

export default CartItem;
