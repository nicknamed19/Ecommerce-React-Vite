

function OrderCard({name, price, image}) {
    
    return(
        <div className='flex justify-between items-center mb-3 mx-2 p-2 bg-gray-100 rounded-lg shadow-md'>
            <div className='flex items-center gap-2'>
                <figure className='w-14 h-14'>
                    <img src={image} className='w-full h-full rounded-lg object-contain' alt={name}/>
                </figure>
                <p className='text-sm font-light w-[110px] h-[40px] overflow-hidden'>{name}</p>
            </div>
            <div className='flex flex-col items-end gap-3'>
                <p className='cursor-pointer text-gray-500 hover:text-red-600 text-base'>Remove</p>
                <span className='text-base font-medium'>${price}</span>
            </div>
        </div>
    )
}

export { OrderCard }