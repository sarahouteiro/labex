import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//Estilizações Globais
export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Fira Sans', sans-serif;
    }
    body {
        color: white;
        background-color: #051E41;
 }
`
//Container do site
export const Container = styled.div`
    background-color: #051E41;
    max-width: 900px;
    margin: 0 auto;
    padding: 25px;
`
//Logo
export const Logo = styled.img`
    width: 230px;
`

//Botoes

export const ButtonPrimario = styled.button`
    margin: 10px 0px 10px 0px;
    height: 40px;
    width: 100%;
    background-color: #ECD8D5;
    color: #0D487C;
    border-radius: 7px;
    border: none;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        background-color: #DFA4A6;
    }
`

//Formulários 

export const Select = styled.select`
    display: block;
    width: 100%;
    margin: 10px 0px 10px 0px;
    height: 40px;
    border-radius: 7px;
    border: none;
    background-color: #EFD9D8;
    padding: 10px;
    color: #32576B;
`

export const Input = styled.input`
    display: block;
    width: 93.8%;
    margin: 10px 0px 10px 0px;
    height: 26px;
    border-radius: 7px;
    border: none;
    background-color: #EFD9D8;
    padding: 10px;
    color: #32576B;
    @media (min-width: 900px) {
        width: 96%;
    }
`