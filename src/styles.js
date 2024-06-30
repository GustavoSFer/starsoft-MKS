import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid red;
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
    }
`

export const Card = styled.div`
    text-align: center;
    border: 1px solid red;
    border-radius: 8px;
    margin: 10px;
    width: 220px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.3);

    button {
        border-radius: 0 0 8px 8px;
        background-color: blue;
        color: white;
        width: 100%;
        padding: 5px;
    }
    
`
export const SessaoCard = styled.div`
    align-items: center;
    border-radius: 15px;

    img {
        width: 60%;
        height: auto;
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
        font-size: 14px;
        padding: 5px;
        width: 30%;
        height: 10%;
     }
`
