import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from '../../Context'

function CheckoutSideMenu() {
    const {closeCheckout, isOpenCheckout,} = useContext(ShoppingCartContext)
    
    return(
        <aside className={`${isOpenCheckout ? 'flex' : 'hidden'} flex-col fixed right-0 w-[280px] h-[100vh] border border-black rounded-lg bg-white`}>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <XMarkIcon 
                    className='w-6 h-6 cursor-pointer' 
                    onClick={() => closeCheckout()}/>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }