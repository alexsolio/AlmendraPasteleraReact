import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; 
import './ItemList.css';

const ItemList = ({ products }) => {
    const { addItem } = useContext(CartContext); 

    const handleAddToCart = (product, quantity) => {
        addItem(product, quantity);
    };

    return (
        <div className='ListGroup'>
            {products.map(prod => (
                <div key={prod.id} className="ItemContainer">
                    <Item {...prod} />
                    <ItemCount stock={prod.stock} initial={1} onAdd={(quantity) => handleAddToCart(prod, quantity)} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;
