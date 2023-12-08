import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

function OrdersCard({date, totalProducts, totalPrice }) {
    
    return(
        <div className='flex justify-between items-center mb-3 mx-2 p-2 bg-gray-100 rounded-lg shadow-md w-80'>
            <div>
                <span>{date}</span>
                <p>Productos: {totalProducts}</p>
            </div>
            <div>
                <Link>
                    <ChevronRightIcon className='h-4 w-4 cursor-pointer' />
                </Link>
                <p>${totalPrice}</p>
            </div>
        </div>
    )
}

export { OrdersCard }