import React, { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../services/firebase';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = categoryId ? await getProductByCategory(categoryId) : await getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
