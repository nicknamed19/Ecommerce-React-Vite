import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

function Card(props) {
    const {id, name, price, category, image, description,} = props

    const {openDetails, 
           setProductToShow,
           setCartProducts, 
           cartProducts,           
           closeDetails,
           closeCheckout,} = useContext(ShoppingCartContext);

    const showProduct = () => {
        openDetails()
        closeCheckout()
        setProductToShow({name, price, category, image, description})
    }

    const addProducts = (e, props) => {
        e.stopPropagation()
        closeDetails()
        setCartProducts([...cartProducts, {...props, quantity: 1}])        
    }

    const renderIcons = (productId) => {
        const isInCart = cartProducts.some(product => product.id === productId)

        return (
            isInCart 
                ? 
                    <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' 
                         onClick={(e) => e.stopPropagation()}>
                        <CheckIcon className='h-6 w-6 text-black'></CheckIcon>
                    </div>
                : 
                    <div
                        className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                        onClick={(e) => addProducts(e, props)}>
                        <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                    </div>
        )


    }

    return(
        <div 
            className='bg-gray-50 shadow cursor-pointer w-48 h-72 rounded-lg'
            onClick={() => showProduct()}>
            <figure className='relative mb-2 w-full h-[70%]'>                
                {renderIcons(id)}
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black/40 text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-full object-contain rounded-lg' alt='Headphones' src={image}/>
            </figure>

            <p className='flex flex-col gap-3 mt-3 p-2'>
                <span className='text-sm font-ligh truncate'>{name}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>

    )
}

export { Card };