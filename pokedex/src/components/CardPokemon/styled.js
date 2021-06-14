import styled from "styled-components";

export const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4fr 1fr;
    justify-items: center;  
    width: 200px;
    border: 1px solid black;
    margin: 1rem;
    background-color: lightskyblue;
`

export const ButtonsTag = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    button{
        width: 100%;
    }
`

export const ImgTag = styled.div`
    grid-column: 1/ span 3;
    display: flex;
    justify-content: center;
    background-size: cover;
`