import React from "react";
import { Cabecalho } from '../styles';

function Header({ carrinho }) {

    return (
        <Cabecalho>
            <h3>MKS <span>Sistemas</span></h3>
            <button>carrinho {carrinho.length}</button>
        </Cabecalho>
    );
}

export default Header;
