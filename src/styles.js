import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    width: 80%;
`

export const Footer = styled.div`
    text-align: center;
`
export const Cabecalho = styled.div`
    background: blue;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    color: white;
    font-size: 25px;
    text-align: center;
    
    
    h3 {
        font-weight:500;
    }

    span {
        font-size: 15px;
        font-weight:300;
    }

    button {
        background-color: white;
        border: none;
        color: black;
        padding: 15px 32px;
        font-size: 16px;
        height: 40px;
        border-radius: 8px;
        position: absolute;
        top: 3%;
        right: 5%;
        text-align: center;
        cursor: pointer;
    }
`

export const Card = styled.div`

    border: 1px solid #FFFAF0;
    border-radius: 5px;
    margin: 15px;
    width: 220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

    button {
        background-color: blue;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 0 0 5px 5px;
        cursor: pointer;
        width: 100%;
        align-self: center;
    }
    
`
export const SessaoCard = styled.div`
    align-items: center;
    border-radius: 15px;

    img {
        width: 60%;
        height: auto;
    }

    p {
        font-size: 12px;
    }
`

export const TitlePrice = styled.div`
     display: flex;
     justify-content: space-between;
     padding: 10px;

     h1 {
        font-size: 14px;
        font-weight: 400;
        width: 60%;
     }

     p {
        border-radius: 8px;
        background-color: black;
        color: white;
        font-weight: 700;
        font-size: 12px;
        padding: 5px;
        width: 36%;
        height: 10%;
     }
`
export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 1px;
`

export const Cart = styled.div`
    width: 300px;
    background-color: #0078d7;
    padding: 20px;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;

    button {
        text-align: end;
        font-weight: 700;
        font-size: 10px;
        border: none;
        background: none;
        color: white;        
        background-color: black;
        padding: 13px;
        border-radius: 50%;
    }
    h2 {
        font-size: 20px;
        text-align: start;
        margin: 0;
    }
`

export const Finalizar = styled.div`
    width: 90%;
    padding: 15px;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 2px;
`

export const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: black;
    font-size: 12px;

    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    div {
            flex-grow: 1;
    }
       
    p {
            font-weight: bold;
    }
    button {
        color: red;
    }
`

export const Grid = styled.div`
    width: 98%;
    height: 65%;
    padding: 10px;
    overflow-y: scroll;
    margin-top: 30px;
`
export const Qtd = styled.div`
    background-color: darkgreen;
    border-radius: 10px;
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;
`