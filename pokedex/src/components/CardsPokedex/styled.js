import styled from "styled-components";

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 5fr 1fr 1fr;
    width: 200px;
    margin: 1rem;
`

export const ButtonsTag = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    button{
        width: 100%;
    }
    grid-row: 3;
    button {
        margin: 5px;
    }
`

export const ImgTag = styled.div`
    grid-column: 1/ span 3;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-color: #F2F2F2;
    width: 100%;
    border-radius: 5px;
    img {
        width: 100%;
    }

`

export const NameId = styled.div`
    grid-column: 1/ span 3;
    grid-row: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 40px;
    
`