import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
    //Estado para contar productos en el carrito
    const [count, setCount] = useState(0)

    //Estado y funciones para abriri y cerrar lo siders
    const [isOpenSide, setisOpenSide] = useState(false)
    const openSide = () => setisOpenSide(true)
    const closeSide = () => setisOpenSide(false)

    //Estado para enviar y mostrar la información de la card al product detail
    const [productToShow, setProductToShow] = useState({})

    //Estado para enviar la información al shopping cart
    const [cartProducts, setCartProducts] = useState([])

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openSide,
            closeSide,
            isOpenSide,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};