import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function SearchProducts ({title}) {
    const { searchValue, setSearchValue }= useContext(ShoppingCartContext)

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>{title}</h1>
            </div>
            <input 
                type='text' 
                placeholder='Search a product' 
                onChange={(e) => setSearchValue(e.target.value)}
                className='rounded-lg border border-black w-80 h-10 p-4 mb-6'
                value={searchValue}/>
        </>
    )
}
 export { SearchProducts }