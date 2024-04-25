import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const [showPopup, setShowPopup] = useState(false);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            setShowPopup(true);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (quantity <= stock) {
            onAdd(quantity);
        } else {
            setShowPopup(true);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div className="AddToCart">
                <button
                    className="Button"
                    title="Agregar al carrito"
                    onClick={handleAddToCart}
                    disabled={!stock || quantity > stock}
                >
                    🛒
                </button>
            </div>
            {showPopup && (
                <div className="PopupWrapper">
                    <div className="Popup">
                        <p>No tenemos esa cantidad de productos en stock. Contáctate con nosotros para hacer un encargo.</p>
                        <button className="Button" onClick={() => setShowPopup(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemCount;
