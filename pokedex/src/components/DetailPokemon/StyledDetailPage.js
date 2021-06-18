import styled from "styled-components";


export const Geral = styled.div`
    width: 100%;
    display: flex;
`
export const Tag = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    background-color: #F2F2F2;
    padding-left: 5px;
`

export const ContainerType = styled.div`
    margin-top: -30px;
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
    background-image:url("../../img/bagkground-light.png");
    
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
        height: 800px;
        width: 600px;
    }
    .seg {
        height: 800px;
        width: 600px;
    }
`

/* display: flex;
    flex-direction: column;
    height: 1000px;
    width:500px; */

