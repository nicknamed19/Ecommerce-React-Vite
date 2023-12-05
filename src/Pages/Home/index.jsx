import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

function Home() {
    const API = 'https://fakestoreapi.com/products';

    const [items, setItems] = useState(null);
    
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <Layout>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {items?.map((item) => (
                    <Card 
                    key={item.id}
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