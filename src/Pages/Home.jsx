import React from "react";
import CardProduto from "../Components/CardProduto";
import { Container } from '../styles';
import { useProductsData } from "../Hooks/useProductsSate";


function Home() {
    const { data, isLoading } = useProductsData();

    if (isLoading) {
        return <p>Carregando ...</p>
        
    }
   
   return (
        <Container>
            {
                data.products.map((item) => (
                    <CardProduto key={item.id} item={item}/>
                ))
            }
            
        </Container>
    );
}

export default Home;