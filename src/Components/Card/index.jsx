
function Card({name, price, category, image}) {
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-1'>+</div>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black/40 text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-full object-cover rounded-lg' alt='Headphones' src={image}/>
            </figure>
            <p className='flex justify-between mt-1.5'>
                <span className='text-sm font-ligh truncate'>{name}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>

    )
}

export { Card };
