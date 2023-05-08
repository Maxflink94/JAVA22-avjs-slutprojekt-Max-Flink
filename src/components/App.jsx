import '../css/App.css';
import DisplayProducts from './DisplayProducts';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import { useState } from 'react';

export default function App() {

    const [showProducts, setShowProducts] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showHome, setShowHome] = useState(true)

    const [productsInStorage, setProductsInStorage] = useState([]);
    const [products, setProducts] = useState([]);
    const [inCart, setCart] = useState([]);

    return (
        <div className='container'>

            <Navbar
                setShowHome={setShowHome}
                showProducts={setShowProducts}
                setShowCart={setShowCart}
                showCart={showCart}
                inCart={inCart}
                setCart={setCart}
                products={products}
            />

            {showHome === true ? <Home /> : ""}

            {showProducts === true ? 
            <DisplayProducts 
            setCart={setCart} 
            inCart={inCart} 
            products={products} 
            setProducts={setProducts} 
            productsInStorage={productsInStorage}
            setProductsInStorage={setProductsInStorage} 
            /> : ""}

            <Footer />

        </div>
    )
}

//--General:
//--Göm produkter om "Home" knapp klickad
//--Lägg till klick på "produktknapp" så att produkter visas
//Lägg till status (från country genomgång) när produkter laddas in
//--Lägg till så att kundvagnen uppdateras på navbaren med antal varor som finns i kundvagnen

//--Kundvagnen:
//--Ska renderas från App.jsx om man klickar på kundvagn i navbar
//Ska gå att lägga till produkter i kundvagnen sålänge saldo är mer än 0 (Usestate i App)
//--Ska visa antalet produkter som är tillagda i kundvagnen
//--Ska visa det sammanlagda priset av alla produkterna som finns i kundvagnen
//--Göra en "Tömma kundvagnen knapp" som tömmer kundvagnen och tar användaren till produktsidan
//"Genomför köp knapp", uppdaterar lagersaldot på firebase (patch), tömmer kundvagnen och berättar för användaren att köpet är genomfört

//Design...