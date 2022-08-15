import styled from "styled-components";

export const Ficha = styled.div`
    background-color: #eec1c1;
    color: #09182A;
    padding: 10px;
    font-size: 14px;
    border-radius: 7px;
    margin-bottom: 25px;
    p {
        color: #09182A;
        margin: 15px 0px 15px 0px;
    }
    @media (min-width: 900px) {
         
    }
`

export const Candidatos = styled.div`
    p{
        text-align: center;
        color: #09182A;
    }
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 25px;
        row-gap: 25px;
    }
`