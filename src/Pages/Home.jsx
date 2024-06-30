import React, { useState } from "react";
import CardProduto from "../Components/CardProduto";
import Header from '../Components/Header';
import { Container } from '../styles';
import { useProductsData } from "../Hooks/useProductsSate";


function Home() {
    const { data, isLoading } = useProductsData();
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        const newCart = cart.filter(({ id }) => id !== item.id);
        setCart([...newCart, item]);
        localStorage.setItem('cart', JSON.stringify([...newCart, item]));
    }

    if (isLoading) {
        return <p>Carregando ...</p>
        
    }
   
   return (
    <div>
         <Header carrinho={cart} />
        <Container>
            {
                data.products.map((item) => (
                    <CardProduto key={item.id} item={item} handleClick={() => handleClick(item)} />
                ))
            }
            
        </Container>

    </div>
    );
}

export default Home;