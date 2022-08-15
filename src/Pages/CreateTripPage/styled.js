import styled from "styled-components";

export const Titulo = styled.h2`
margin-top: 40px;
margin-bottom: 25px;
text-align: center;
color: #EDC0C3;
`

export const Botoes = styled.div`
    margin-top: 30px;
    @media (min-width: 900px) {
        display: flex;   
        column-gap: 30px;
    }
`

export const AreaForm = styled.div`
    @media (min-width: 900px) {
        max-width: 500px;
        margin: 0 auto;
    }
`