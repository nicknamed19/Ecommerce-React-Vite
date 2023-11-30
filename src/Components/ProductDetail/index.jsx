import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetail() {
    return(
        <aside className='flex flex-col fixed right-0 w-[280px] h-[100vh] border border-black rounded-lg bg-white'>
            <div className='flex  justify-between p-4 items-center'>
                <h2 className='font-medium text-xl'>Details</h2>
                <XMarkIcon className='w-6 h-6' />
            </div>
        </aside>
    )
}

export { ProductDetail }