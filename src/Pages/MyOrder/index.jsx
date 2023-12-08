import { useContext } from "react";
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
            My Order
            {renderMyOrderCart()}
        </Layout>
    )
}

export { MyOrder };