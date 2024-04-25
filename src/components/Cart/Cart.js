import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    const renderCartItems = () => {
        return cart.map(item => (
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                img={item.img} 
            />
        ));
    };

    useEffect(() => {
        console.log("Carrito al cargar la página:", cart);
    }, [cart]);

    return (
        <div>
            {totalQuantity === 0 ? (
                <div>
                    <h1>El carrito está vacío</h1>
                    <Link to='/' className='Option'>Productos</Link>
                </div>
            ) : (
                <div>
                    <hr></hr>
                    {renderCartItems()}
                    <hr></hr>
                    <div className="precio-total">
                        <h3 className="total">Total a pagar:</h3>
                        <h3 className="precio">${totalPrice}</h3>
                    </div>
                    <button onClick={clearCart} className="Button clear-cart-button">Vaciar carrito</button>
                    <Link to='/checkout' className='Option terminar-compra-button'>Terminar compra</Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
