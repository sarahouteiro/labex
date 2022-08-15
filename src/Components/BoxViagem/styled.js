import styled from "styled-components";

export const Viagem = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #EDC0C3;
    border-radius: 7px;
    font-size: 14px;
    color: #09182A;
    p {
        margin: 15px 0px 15px 0px;
    }
    @media (min-width: 900px) {
        margin-bottom: 0;
    }
`

export const Lista = styled.div`
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 10px;
        column-gap: 25px;
        margin-bottom: 30px;
        margin-top: 20px;
    }
`