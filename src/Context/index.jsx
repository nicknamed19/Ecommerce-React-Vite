import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
    //Estado para contar productos en el carrito
    const [count, setCount] = useState(0)

    //Estado y funciones para manejar el product detail
    const [isOpenDetails, setisOpenDetails] = useState(false)
    const openDetails = () => setisOpenDetails(true)
    const closeDetails = () => setisOpenDetails(false)

    //Estado y funciones para manejar el Cheackout side menu
    const [isOpenCheckout, setisOpenCheckout] = useState(false)
    const openCheckout = () => setisOpenCheckout(true)
    const closeCheckout = () => setisOpenCheckout(false)

    //Estado para enviar y mostrar la información de la card al product detail
    const [productToShow, setProductToShow] = useState({})

    //Estado para agrupar la informacion del shopping cart
    const [cartProducts, setCartProducts] = useState([])

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openDetails,
            closeDetails,
            isOpenDetails,
            openCheckout,
            closeCheckout,
            isOpenCheckout,
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