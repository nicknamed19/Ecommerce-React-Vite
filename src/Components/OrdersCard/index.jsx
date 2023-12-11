import { Link } from "react-router-dom"
import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"

function OrdersCard({id, date, totalProducts, totalPrice }) {
    
    return(
        <div className='flex justify-between items-center mb-3 mx-2 p-2 bg-gray-100 rounded-lg shadow-md w-80'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <CalendarDaysIcon className='w-4 h-4' />
                    <span>{date}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <ShoppingBagIcon className='w-4 h-4' />
                    <p>Articles: {totalProducts}</p>
                </div>
            </div>
            <div className='flex flex-col items-end gap-2 '>
                <Link className=' p-1' to={`/my-orders/${id}`}>
                    <ChevronRightIcon className='h-4 w-4 cursor-pointer' />
                </Link>
                <p>${totalPrice}</p>
            </div>
        </div>
    )
}

export { OrdersCard }