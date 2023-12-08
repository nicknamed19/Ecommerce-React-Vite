import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from "../../utils";

function CheckoutSideMenu() {
    const {
        isOpenCheckout, 
        closeCheckout, 
        cartProducts,
        increaseQuantities,
        decreaseQuantities,
        handleDelete,
        handleCheckout
    } = useContext(ShoppingCartContext)

    
    
    return(
        <aside className={`${isOpenCheckout ? 'flex' : 'hidden'} flex-col fixed right-0 w-[285px] h-[90vh] border border-black rounded-lg bg-white z-10`}>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <XMarkIcon 
                    className='w-6 h-6 cursor-pointer' 
                    onClick={() => closeCheckout()}/>
            </div>
            <div className='flex-1 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300'>
            {cartProducts.map(product => (
                <OrderCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                handleDelete={handleDelete}
                quantity={product.quantity}
                increaseQuantities={increaseQuantities}
                decreaseQuantities={decreaseQuantities}/>
            ))}
            </div>
            <div className='px-6'>
                <p className='mb-2 flex items-center justify-between text-xl py-4 bg-gray-50'>
                    <span>Total</span>
                    <span className='font-semibold'>${totalPrice(cartProducts)}</span>
                </p>
                <button 
                    disabled ={cartProducts.length === 0}
                    className='bg-black py-3 text-white w-full rounded-lg mb-4' 
                    onClick={() => handleCheckout(totalPrice)}
                >
                    Checkout
                </button>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }