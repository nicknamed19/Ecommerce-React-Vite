import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {

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

    //Funcion para eliminar productos del checkout menu
    const handleDelete = (id) => {
        const newCartProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(newCartProducts)
    }

    //Funcion para aumentar la cantidad de productos
    const increaseQuantities = (id) => {
        const productData = cartProducts.find((product) => product.id === id)
        productData.quantity += 1 
        setCartProducts([...cartProducts])
    }

    //Funcion para disminuir la cantidad de productos
    const decreaseQuantities = (id) => {
        const productData = cartProducts.find((product) => product.id === id)
        productData.quantity -= 1
        setCartProducts([...cartProducts])
        
        if(productData.quantity === 0){
            handleDelete(id)
        } 
        
    }



    return(
        <ShoppingCartContext.Provider value={{
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
            increaseQuantities,
            handleDelete,
            decreaseQuantities,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};