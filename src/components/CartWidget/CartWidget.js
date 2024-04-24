import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import carrito from './assets/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
    const { totalQuantity, clearCart } = useContext(CartContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className='CartWidgetContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to='/cart'>
                <img className='CartImg' src={carrito} alt="widget-carrito"/>
                <span className="ItemCount">{totalQuantity}</span>
            </Link>
            {isHovered && (
                <div className="CartHoverMenu">
                    <Link to='/cart'>
                        <button className="HoverButton">Ver carrito</button>
                    </Link>
                    <button className="HoverButton" onClick={handleClearCart}>Vaciar carrito</button>
                    <button className="HoverButton">Terminar compra</button>
                </div>
            )}
        </div>
    );
};

export default CartWidget;
