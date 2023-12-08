import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";

function MyOrders() {    
    const { order } = useContext(ShoppingCartContext)
    return (
        <Layout>
            My Orders
            {
                order.map((order, index) => (

                    <OrdersCard 
                        key={index}
                        date={order.date}
                        totalProducts={order.totalProducts}
                        totalPrice={order.totalPrice}
                    />
                ))
            }
        </Layout>
    )
}

export { MyOrders };