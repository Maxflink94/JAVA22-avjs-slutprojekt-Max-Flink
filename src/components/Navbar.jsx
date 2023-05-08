import Cart from './Cart';

export default function Navbar({ setShowHome, showProducts, setShowCart, showCart, inCart, setCart, products }) {

    function handleHomeClick() {
        setShowHome(true);
        showProducts(false);
        setShowCart(false);
    }

    function handleProductClick() {
        showProducts(true);
        setShowCart(false);
        setShowHome(false);
    }

    function handleCartClick() {
        setShowCart(true);
        showProducts(false);
        setShowHome(false);
    }

    return (
        <>
            <div className="navbar">
                <button onClick={handleHomeClick}>Home</button>
                <button onClick={handleProductClick}>Products</button>
                <button onClick={handleCartClick}>Cart {inCart.length}</button>
            </div>

            { showCart === true ? 
            <Cart 
            inCart={inCart} 
            setCart={setCart} 
            products={products} 
            handleProductClick={handleProductClick} 
            /> : "" }
        </>
    )
}