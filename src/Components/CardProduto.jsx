import React from 'react';
import { Card, SessaoCard, TitlePrice } from '../styles';

function CardProduto({ item, handleClick }) {

  return (
    <Card>
       <section>
            <div>
                <SessaoCard>
                    <img src={item.photo} alt={item.description} />
                    <TitlePrice>
                        <h1>{item.name}</h1>
                        <p>R${item.price}</p>
                    </TitlePrice>
                    <p>{item.description}</p>
                    <button type='button' onClick={handleClick}>Comprar</button>
                </SessaoCard>
            </div>
        </section>
    </Card>
  );
}

export default CardProduto;