import styled from "styled-components";

export const Banner = styled.img`
    width: 100%;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 7px;
    @media (min-width: 900px) {
        height: 580px;
    }
`

export const Botoes = styled.div`
    @media (min-width: 900px) {
        display: flex;   
        column-gap: 30px;
    }
`