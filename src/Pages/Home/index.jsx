import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { SearchProducts } from "../../Components/SearchProducts";

function Home() {
    const { searcheadItems, categoryPath, renderPages } = useContext(ShoppingCartContext)
    
    const renderView = () => {
        return(
            categoryPath === 'All' 
                ? 
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
                :
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {renderPages?.map((item) => (
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
        )
    }
    return (
        <Layout>
            <SearchProducts title={'All Products'}/>
            {renderView()}  
        </Layout>
    )
}

export { Home };