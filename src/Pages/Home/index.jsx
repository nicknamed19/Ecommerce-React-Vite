import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { SearchProducts } from "../../Components/SearchProducts";

function Home() {
    const { searcheadItems } = useContext(ShoppingCartContext)
    
    return (
        <Layout>
            <SearchProducts title={'All Products'}/>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {searcheadItems?.map((item) => (
                    <Card 
                    key={item.id}
                    id={item.id}
                    name={item.title}
                    category={item.category}
                    price={item.price}
                    image={item.image}
                    description={item.description}/>
                ))}            
            </div>            
        </Layout>
    )
}

export { Home };