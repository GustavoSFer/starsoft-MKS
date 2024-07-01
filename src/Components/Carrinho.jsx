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
        return accumulator + parseFloat(product.price * product.qtd);
    }, 0); 

    const adicionar = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const ProductIndex = cart.findIndex(prod => prod.id === item.id);
        if (cart[ProductIndex].qtd < 1 ) {
            cart[ProductIndex].qtd += 2;
        } else {
            cart[ProductIndex].qtd += 1;
        }
        
        localStorage.setItem('cart', JSON.stringify([...cart]));
    }

    const remover = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const ProductIndex = cart.findIndex(prod => prod.id === item.id);
        if (cart[ProductIndex].qtd === 1 ) {
            const newCart = cart.filter(({ id }) => id !== item.id);
            localStorage.setItem('cart', JSON.stringify([...newCart]));
        } else {
            cart[ProductIndex].qtd -= 1;
            localStorage.setItem('cart', JSON.stringify([...cart]));
        }
    }
    
    
    return(
        <Cart>
            <button type="button" onClick={handleClick}>X</button>
            <h2>Carrinho </h2>
            <h2>de compras</h2>

            <Grid>
                {
                    cart.map((item) => (
                        <ProdutosCar item={item} key={item.id}
                            adicionar={() => adicionar(item)}
                            remover={() => remover(item)}
                        />
                    ))
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
