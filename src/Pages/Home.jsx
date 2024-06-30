import React from "react";
import CardProduto from "../Components/CardProduto";
import { Container } from '../styles';

function Home() {
    return (
        <Container>
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
        </Container>
    );
}

export default Home;