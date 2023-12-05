import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

function Card({name, price, category, image, description}) {
    const {count, 
           setCount, 
           openDetails, 
           setProductToShow,
           setCartProducts, 
           cartProducts,
           openCheckout,
           closeDetails,
           closeCheckout,} = useContext(ShoppingCartContext);

    const showProduct = () => {
        openDetails()
        closeCheckout()
        setProductToShow({name, price, category, image, description})
    }

    const addProducts = () => {
        setCount(count + 1)
        openCheckout()
        closeDetails()
        setCartProducts([...cartProducts,{name, price, category, image, description}])
    }

    return(
        <div 
            className='bg-gray-50 shadow cursor-pointer w-48 h-56 rounded-lg'
            onClick={() => showProduct()}>
            <figure className='relative mb-2 w-full h-4/5'>                
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => {
                        e.stopPropagation()
                        addProducts()}}>
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div> 
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black/40 text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-full object-contain rounded-lg' alt='Headphones' src={image}/>
            </figure>

            <p className='flex justify-between mt-1.5'>
                <span className='text-sm font-ligh truncate'>{name}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>

    )
}

export { Card };