import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './itemDetailContainer.jsx';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const url = idCategory 
            ? `https://fakestoreapi.com/products/category/${idCategory}`
            : 'https://fakestoreapi.com/products';

        fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(e => console.error(e));
    }, [idCategory]);

    return (
        <div>
            <Routes>
                <Route path=":idProduct" element={<ItemDetailContainer />} />
                <Route path="/" element={
                    <>
                        {products.map((product) => (
                            <p key={product.id}>
                                <Link to={`/product/${product.id}`}>{product.title}</Link>
                            </p>
                        ))}
                    </>
                } />
            </Routes>
        </div>
    );
}

export default ItemListContainer;
