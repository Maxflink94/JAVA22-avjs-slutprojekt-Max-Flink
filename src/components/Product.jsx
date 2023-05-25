export default function Product({ title, stock, price, images, setCart, setProducts, productsInStorage }) {

    function addToCart() {
        setCart(inCart => {
            const existingItem = inCart.find(item => item.title === title);
            if (existingItem) {
                const newCart = inCart.map(item =>
                    item === existingItem ? { ...item, amount : item.amount + 1 } : item
                );
                updateProducts(newCart);
                return newCart;
            } else {
                const newCart = [...inCart, { title, amount: 1, images, price }]; 
                updateProducts(newCart);    
                return newCart;
            }
        });
    }

    function updateProducts(cart) {
        const products = productsInStorage.map(storageItem =>{
            const cartItem = cart.find(cartItem => cartItem.title == storageItem.title);
            console.log(cartItem);
            if(cartItem){
                console.log(cartItem.amount)
                console.log(storageItem.stock)
                return {
                    images: storageItem.images, 
                    price: storageItem.price, 
                    id: storageItem.id, 
                    title: storageItem.title, 
                    stock: storageItem.stock - cartItem.amount};
            }
            return storageItem;
        })
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

