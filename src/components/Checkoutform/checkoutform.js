import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { createBuyOrder } from '../../services/firebase';

const CheckoutForm = () => {
    const { cart } = useContext(CartContext);

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
        e.preventDefault(); // Corregir aquí

        if (userData.name === "" && userData.email === "") return;

        const order = {
            name: userData.name,
            email: userData.email,
            items: cart,
            date: new Date()
        };

        createBuyOrder(order)
            .then(data => {
                setIdOrder(data);
            });
    }

    if (idOrder) return <div>{idOrder}</div>;

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">
                    Enviar
                </button>
            </form>
            <div>checkoutform</div>
        </>
    );
};

export default CheckoutForm;
