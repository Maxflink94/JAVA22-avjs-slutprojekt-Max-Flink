export default function Cart({ inCart, setCart, handleProductClick, products }) {

    function emptyCartClick() {
        setCart([]);
        handleProductClick();
    }

    function totalPrice() {
        let totalSum = 0;
        inCart.map(product => {
            totalSum += parseInt(product.price) * product.amount;
        })
        return totalSum;
    }

    async function updateStorage() {
        console.log(products)
        const response = await fetch('https://slutprojektwebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json',
            {
                method: 'PUT',
                body: JSON.stringify(products),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        const data = await response.json();
        alert("Purchase Successful");
        emptyCartClick();
        console.log(data)
    }

    return (
        <div>

            {inCart.map(product =>
                <p key={product.id}> {product.title} - {product.price}$ x{product.amount} </p>)}

            <h2>Total Price: {totalPrice()}$</h2>

            <button onClick={emptyCartClick} >Empty Cart</button>
            <button onClick={updateStorage} >Checkout</button>
        </div>
    )
}