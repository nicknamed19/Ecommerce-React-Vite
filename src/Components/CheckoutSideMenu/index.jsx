import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from '../../Context'

function CheckoutSideMenu() {
    const {closeSide, isOpenSide,} = useContext(ShoppingCartContext)
    
    return(
        <aside className={`${isOpenSide ? 'flex' : 'hidden'} flex-col fixed right-0 w-[280px] h-[100vh] border border-black rounded-lg bg-white`}>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <XMarkIcon 
                    className='w-6 h-6 cursor-pointer' 
                    onClick={() => closeSide()}/>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }