import React, { useState } from "react";
import { Cabecalho } from '../styles';
import Carrinho from "./Carrinho";
import { FaShoppingCart } from "react-icons/fa";

function Header({ carrinho }) {

    const [verCarrinho, setVerCarrinho] = useState(false);

    const carClick = () => {
        setVerCarrinho(!verCarrinho);
    }

    return (
        <Cabecalho>
            <h3>MKS <span>Sistemas</span></h3>
            <button type="button" onClick={carClick}>             
                <FaShoppingCart /><span> </span>{carrinho.length}
            </button>
            {
                verCarrinho && <Carrinho handleClick={carClick} />
            }
        </Cabecalho>
    );
}

export default Header;
