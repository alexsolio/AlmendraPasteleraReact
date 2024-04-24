import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>El carrito está vacío</h1>
                <Link to= '/' className='Option'>Productos</Link>
            </div>
        );
    }

    return (
        <div>
            { cart.map(item => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    img={item.img} 
                />
            ))}
            <div className="clear-cart-container">
                <button onClick={() => clearCart()} className="Button clear-cart-button">Vaciar carrito</button> {}
            </div>
            <h3>Total: ${totalPrice}</h3> {}
            <Link to='/checkout' className='Option'>Terminar compra</Link>
        </div>
    );
}

export default Cart;
