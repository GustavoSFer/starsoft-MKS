import React from 'react';
import { CartItem } from '../styles';

function ProdutosCar({ item }) {
    return (
        <CartItem>
            <img src={item.photo} alt="Apple Homepod" />
            <div>
                <p>{item.name}</p>
                <p>R${item.price}</p>
            </div>
        </CartItem>
    );
};

export default ProdutosCar;
