import React from 'react';
import { CartItem, Qtd } from '../styles';

function ProdutosCar({ item, adicionar, remover }) {

    return (
        <CartItem>
            <img src={item.photo} alt="Apple Homepod" />
            <div>
                <p>{item.name}</p>
                <p>R${item.price}</p>                
            </div>
            <div>
                <Qtd onClick={adicionar}>+</Qtd>
                <p>{item.qtd}</p>
                <Qtd onClick={remover}>-</Qtd>        
            </div>
        </CartItem>
    );
};

export default ProdutosCar;
