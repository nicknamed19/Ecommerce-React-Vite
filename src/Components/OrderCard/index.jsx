import { XMarkIcon } from "@heroicons/react/24/solid"

function OrderCard({id, name, price, image, handleDelete}) {
    
    return(
        <div className='flex justify-between items-center mb-3 mx-2 p-2 bg-gray-100 rounded-lg shadow-md'>
            <div className='flex items-center gap-2'>
                <figure className='w-14 h-14'>
                    <img src={image} className='w-full h-full rounded-lg object-contain' alt={name}/>
                </figure>
                <p className='text-sm font-light w-[110px] h-[40px] overflow-hidden'>{name}</p>
            </div>
            <div className='flex flex-col items-end gap-3'>
                <XMarkIcon onClick={() => handleDelete(id)} className='h-4 w-4 cursor-pointer hover:text-red-600' />                
                <span className='text-base font-medium'>${price}</span>
            </div>
        </div>
    )
}

export { OrderCard }