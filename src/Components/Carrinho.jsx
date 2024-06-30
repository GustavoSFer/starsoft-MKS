import React, { useState, useEffect } from 'react';
import { Cart, Total, Finalizar, Grid } from '../styles';
import ProdutosCar from './ProdutosCar';

function Carrinho({ handleClick }) {
    const [cart, setCart] = useState([]);

    
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storage);
    },[]);
    
    const totalSum = cart.reduce((accumulator, product) => {
        return accumulator + parseFloat(product.price);
    }, 0); 
    
    
    return(
        <Cart>
            <button type="button" onClick={handleClick}>X</button>
            <h2>Carrinho </h2>
            <h2>de compras</h2>

            <Grid>
                {
                    cart.map((item) => <ProdutosCar item={item} />)
                }
            </Grid>

            <Total>
                <p>Total:</p>
                <p>R${totalSum}</p>
            </Total>
                <Finalizar type="button">
                    Finalizar Compra
                </Finalizar>
            
        </Cart>
    );
};

export default Carrinho;
