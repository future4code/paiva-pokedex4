import styled from "styled-components";

export const Main = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr auto 1fr;
    justify-content: center;
    background-color: #F2F4F4;
    padding: 10px;
    justify-self: center;
    place-self: center;
    justify-items: center;
    border-radius: 10px;

    img {
        grid-column: 2;
        grid-row: 1 / span 4;
        height: 100%;
    }

    a {
        grid-row: 3;
        color: #313131;
        cursor: pointer;
    }
`

export const TituloPage = styled.div`

`