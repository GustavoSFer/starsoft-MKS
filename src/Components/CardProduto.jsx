import React from 'react';
import { Card, SessaoCard, TitlePrice } from '../styles';

function CardProduto() {
  return (
    <Card>
       <section>
            <div>
                <SessaoCard>
                    <img src="https://www.imagensempng.com.br/wp-content/uploads/2021/10/Notebook-Png.png" alt="" />
                    <TitlePrice>
                        <h1>Card 3 hdushdushu dshudhs</h1>
                        <p>R$: 300</p>
                    </TitlePrice>
                    <p>Descrição do card 3. teste jdhsuhusd  djsuidis</p>
                    <button type='button'>Comprar</button>
                </SessaoCard>
            </div>
        </section>
    </Card>
  );
}

export default CardProduto;