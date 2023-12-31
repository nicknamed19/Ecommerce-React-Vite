import { createContext, useState, useEffect } from 'react';

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

    //Estado para agrupar los productos del checkout menu
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

    //Estado para agrupar la informacion del shopping cart
    const [order, setOrder] = useState([])
    
    //Funcion para agupar la informacion de cada orden
    const handleCheckout = (totalPrice) => {

        const currentDate = () => {
            const date = new Date().toLocaleDateString();
            return date
         }

        const addToOrder = {
            date: currentDate(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        }
        setOrder([...order, addToOrder])

        setCartProducts([])
        closeCheckout()
        setSearchValue('')
    }

    //Manejo de la API y el estado que maneja la información
    const API = 'https://fakestoreapi.com/products';

    const [items, setItems] = useState(null);
    
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, [])

    //Almacenamiento para los valores en la barra de busqueda
    const [searchValue, setSearchValue] = useState('')

    //Estado para almacenar el nombre de las rutas por categoria
    const [categoryPath, setCategoryPath] = useState('')

    //Variable para renderizar los productos que coincidan con la barra de busqueda
    const searcheadItems = items?.filter((item) =>{
        const searchValueText = searchValue?.toLowerCase()
    
        return item.title.toLowerCase().includes(searchValueText)
    })

    //Variable para almacenar el filtro los elementos a partir de las categorias
    const searcheadCategories = items?.filter((item) =>{
        const searchCategoryText = categoryPath?.toLowerCase()
    
        return item.category.toLowerCase().includes(searchCategoryText)
    })
    
    //Variable para renderizar los productos que coincidan en categoria y en la barra de busqueda
    const renderPages = searcheadCategories?.filter((item) => {
        const searchValueText = searchValue?.toLowerCase()

        return item.title.toLowerCase().includes(searchValueText)
    }) 


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
            order, 
            setOrder,
            handleCheckout,
            items, 
            setItems,
            searchValue, 
            setSearchValue,
            categoryPath, 
            setCategoryPath,
            searcheadItems,
            searcheadCategories,
            renderPages,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};