import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
    //Estado para contar productos en el carrito
    const [count, setCount] = useState(0)

    //Estado y funciones para manejar product detail
    const [isOpenDetails, setisOpenDetails] = useState(false)
    const openDetails = () => setisOpenDetails(true)
    const closeDetails = () => setisOpenDetails(false)

    //Estado para enviar y mostrar la información de la card al product detail
    const [productToShow, setProductToShow] = useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openDetails,
            closeDetails,
            isOpenDetails,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};