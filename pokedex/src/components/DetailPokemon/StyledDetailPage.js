import styled from "styled-components";


export const Geral = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    color: #cccccc;
`
export const Tag = styled.div`
    button{
        border-radius: 10px;
        border: none;
        margin: 1rem;
        width: 10vw;
        background-color: white;
        &:hover{
            background-color: #35ACCE;
        }
    }
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: #313131;
    padding-left: 2rem;
    min-height: 85vh;
    max-height: 85vh;
    overflow-y:hidden; 
    overflow:scroll; 
    ::-webkit-scrollbar {
    display: none;
    }

`

export const ContainerType = styled.div`
    display: flex;
    p{
        margin: 0;
    }

`
export const ContainerStats = styled.div`
    display: flex;
    margin-top: -30px;
`
export const ContainerAbilities = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -30px;
`
export const Sprites = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 85vh;
    .teste {
        position: relative;
    }
    .teste .seg {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    .teste:hover .seg {
        visibility: visible;
        opacity: 1;
    }
    .teste:hover .pri {
        visibility: hidden;
        opacity: 0;
    }
    .pri {
        height: 500px;
        width: 500px;
    }
    .seg {
        height: 500px;
        width: 500px; 
    }
`
