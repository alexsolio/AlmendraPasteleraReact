import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getOneProduct } from "../../services/firebase"; // Importa la función getOneProduct desde firebase.js

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getOneProduct(itemId); // Obtiene el producto por su ID
                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {product && <ItemDetail {...product} />} {/* Renderiza el detalle del producto si está disponible */}
        </div>
    );
};

export default ItemDetailContainer;
