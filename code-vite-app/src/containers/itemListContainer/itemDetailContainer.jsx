import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { idProduct } = useParams();

    useEffect(() => {
        if (idProduct) {
            fetch(`https://fakestoreapi.com/products/${idProduct}`)
                .then(res => res.json())
                .then(json => setProduct(json))
                .catch(e => console.error(e));
        }
    }, [idProduct]);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ) : 
            }
        </div>
    );
}

export default ItemDetailContainer;
