import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../Context'

function ProductDetail() {
    const {isOpenDetails, 
           closeDetails, 
           productToShow} = useContext(ShoppingCartContext)
    
    const {name, price, category, image, description} = productToShow
    

    return(
        <aside className={`${isOpenDetails ? 'flex' : 'hidden'} flex-col fixed right-0 w-[280px] h-[100vh] border border-black rounded-lg bg-white z-10`}>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Details</h2>
                <XMarkIcon 
                    className='w-6 h-6 cursor-pointer' 
                    onClick={() => closeDetails()}/>
            </div>

            <figure className='px-6'>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-full rounded-lg'/>
            </figure>
            <p className='flex flex-col gap-1 p-6'>
                <span className='text-black/60'>{category}</span>
                <span className='font-medium text-2xl mb-2'>${price}</span>
                <span className='font-medium text-md'>{name}</span>                
                <span className='font-light text-sm h-20 truncate whitespace-normal'>{description}</span>
                
            </p>
        </aside>
    )
}

export { ProductDetail }