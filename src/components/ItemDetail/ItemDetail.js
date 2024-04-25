import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { getOneProduct } from "../../services/firebase"; // Importa la función para obtener un producto desde Firebase
import "./ItemDetail.css";

const ItemDetail = ({ id }) => {
    const [product, setProduct] = useState(null);
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getOneProduct(id);
            setProduct(productData);
        };
        fetchProduct();
    }, [id]);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img // Asegúrate de que `product.img` sea la URL de la imagen en Firebase Storage
        };

        addItem(item, quantity);
    };

    return (
        <div>
            {product ? (
                <article className="CardItem">
                    <header className="Header">
                        <h2 className="ItemHeader">{product.name}</h2>
                    </header>
                    <picture>
                        <img src={product.img} alt={product.name} className="ItemImg" />
                    </picture>
                    <section>
                        <p className="Info">Descripción: {product.description}</p>
                        <p className="Info">Precio: ${product.price}</p>
                    </section>
                    <footer className="ItemFooter">
                        <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
                        {quantityAdded > 0 && (
                            <Link to="/cart" className="Option">
                                Ir al carrito
                            </Link>
                        )}
                    </footer>
                </article>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ItemDetail;
