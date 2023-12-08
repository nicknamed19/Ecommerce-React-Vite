import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Layout } from "../../Components/Layout";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext)

    const renderMyOrderCart  = () => (
        order[0]
            ?
                <div className='flex flex-col w-80'>
                    {order.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}                    
                            quantity={product.quantity}/>
                    ))}
                </div>
            :
                <p>No se ha seleccionado una orden</p>
    )

    return (
        <Layout>
            <div className='flex w-80 justify-center items-center relative mb-5'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='w-6 h-6 cursor-pointer' />                
                </Link>
                <p>
                    My Order
                </p>
            </div>
            {renderMyOrderCart()}
        </Layout>
    )
}

export { MyOrder };