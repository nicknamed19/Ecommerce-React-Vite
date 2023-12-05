import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'

function CheckoutSideMenu() {
    const {closeCheckout, 
           isOpenCheckout, 
           cartProducts,
           setCartProducts,} = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const newCartProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(newCartProducts)
    }
    
    return(
        <aside className={`${isOpenCheckout ? 'flex' : 'hidden'} flex-col fixed right-0 w-[280px] h-[90vh] border border-black rounded-lg bg-white z-10`}>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <XMarkIcon 
                    className='w-6 h-6 cursor-pointer' 
                    onClick={() => closeCheckout()}/>
            </div>
            <div className='overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300'>
            {cartProducts.map(product => (
                <OrderCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                handleDelete={handleDelete}/>
            ))}
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }