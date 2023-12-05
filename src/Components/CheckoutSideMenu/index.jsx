import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'

function CheckoutSideMenu() {
    const {closeCheckout, 
           isOpenCheckout, 
           cartProducts,} = useContext(ShoppingCartContext)
    
    return(
        <aside className={`${isOpenCheckout ? 'flex' : 'hidden'} flex-col fixed right-0 w-[280px] h-[100vh] border border-black rounded-lg bg-white z-10`}>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <XMarkIcon 
                    className='w-6 h-6 cursor-pointer' 
                    onClick={() => closeCheckout()}/>
            </div>
            {cartProducts.map(product => (
                <OrderCard 
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}/>
            ))}
        </aside>
    )
}

export { CheckoutSideMenu }