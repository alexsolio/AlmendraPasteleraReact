import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { createBuyOrder } from '../../services/firebase';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const { cart, clearCart } = useContext(CartContext);

    const [idOrder, setIdOrder] = useState(null);

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        items: "",
        date: "",
    });

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        setUserData({ ...userData, [inputName]: inputValue });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.name === "" || userData.email === "") return;

        const order = {
            name: userData.name,
            email: userData.email,
            items: cart,
            date: new Date()
        };

        createBuyOrder(order)
            .then(data => {
                setIdOrder(data);
                clearCart(); // Vacía el carrito después de la compra
            });
    }

    if (idOrder) {
        return (
            <div className="order-success">
                <p className="order-number">Tu número de orden es: {idOrder}</p>
                <p className="thank-you">Gracias por comprar en Almendra Pastelera!</p>
                <Link to="/" className="navbar-button">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="checkout-form-container">
            <h2 className="checkout-title">Completa tu compra</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    placeholder='Ingrese su nombre'
                    name="name"
                    required
                    value={userData.name}
                    onChange={handleChange}
                />

                <input
                    className="input"
                    type="email"
                    placeholder='Ingrese su correo electrónico'
                    name="email"
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
                <button type="submit" className="checkout-button">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
