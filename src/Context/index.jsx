import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
    const [count, setCount] = useState(0)

    const [isOpenDetails, setisOpenDetails] = useState(false)

    const openDetails = () => setisOpenDetails(true)
    const closeDetails = () => setisOpenDetails(false)

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openDetails,
            closeDetails,
            isOpenDetails,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};