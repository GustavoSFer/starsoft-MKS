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
