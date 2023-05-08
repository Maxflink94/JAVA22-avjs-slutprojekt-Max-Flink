export default function Product({ title, stock, price, images, setCart, inCart, setProducts, productsInStorage }) {

    function addToCart() {
        setCart(inCart => {
            const existingItem = inCart.find(item => item.title === title);
            if (existingItem) {
                return inCart.map(item =>
                    item === existingItem ? { ...item, amount: item.amount + 1 } : item
                );
            } else {
                return [...inCart, { title, amount: 1, images, price }];
            }
        });
        updateProducts();
    }

    function updateProducts() {
        const products = productsInStorage.map(storageItem =>{
            const cartItem = inCart.find(cartItem => cartItem.title === storageItem.title);
            if(cartItem){
                return {
                    images: storageItem.images, 
                    price: storageItem.price, 
                    id: storageItem.id, 
                    title: storageItem.title, 
                    stock: storageItem.stock - cartItem.amount};
            }
            return storageItem;
        })

        // const newProducts = productsInStorage;
        // inCart.forEach(cartProduct => {
        //     newProducts.find(product => cartProduct.title == product.title).stock - cartProduct.amount;
        //     console.log(cartProduct)
        // });
        console.log(products);
        setProducts(products);
    }

    return (
        <>
            <div className="productCards">
                <img src={images} />
                <h2>{title}</h2>
                <p>Stock: {stock}</p>
                <h3>{price}$</h3>

                {stock > 0 ? <button className="addToCart" onClick={() => {
                    addToCart();
                }}>Add to Cart</button> : <p className="OutOfStock">Out of stock</p>}

            </div>
        </>
    )
}

