import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../Context'

function ProductDetail() {
    const {isOpenDetails, closeDetails} = useContext(ShoppingCartContext)
    return(
        <aside className={`${isOpenDetails ? 'flex' : 'hidden'} flex-col fixed right-0 w-[280px] h-[100vh] border border-black rounded-lg bg-white`}>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Details</h2>
                <XMarkIcon 
                    className='w-6 h-6 cursor-pointer' 
                    onClick={() => closeDetails()}/>
            </div>
        </aside>
    )
}

export { ProductDetail }