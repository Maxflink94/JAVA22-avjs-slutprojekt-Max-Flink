import { useEffect, useState } from 'react';
import Product from './Product';

export default function DisplayProducts({ setCart, inCart, productsInStorage, setProductsInStorage, products, setProducts }) {

    const [data, setData] = useState([]);

    async function getProducts() {
        const response = await fetch('https://slutprojektwebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json');
        const data = await response.json();
        setData(data);
        

        if (Array.isArray(data)) {
            const newProd = data.map(p => {
                return {
                    id: p.id,
                    stock: p.stock,
                    title: p.title,
                    price: p.price,
                    images: p.images
                }
            })
            setProductsInStorage(newProd)
            setProducts(newProd)
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="productDiv">
                {products.map(product =>
                    <Product
                        key={product.id}
                        id={product.id}
                        images={product.images}
                        stock={product.stock}
                        price={product.price}
                        title={product.title}
                        setCart={setCart}
                        inCart={inCart}
                        productsInStorage={productsInStorage}
                        setProducts={setProducts}
                    />)}
            </div>
        </>
    )
}