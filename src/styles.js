import styled from 'styled-components';

export const Footer = styled.p`
    background: red;
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