import React, { useState } from "react";
import { Cabecalho } from '../styles';
import Carrinho from "./Carrinho";

function Header({ carrinho }) {

    const [verCarrinho, setVerCarrinho] = useState(false);

    const carClick = () => {
        setVerCarrinho(!verCarrinho);
    }

    return (
        <Cabecalho>
            <h3>MKS <span>Sistemas</span></h3>
            <button type="button" onClick={carClick}>
                carrinho {carrinho.length}
            </button>
            {
                verCarrinho && <Carrinho />
            }
        </Cabecalho>
    );
}

export default Header;
