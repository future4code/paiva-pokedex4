import styled from "styled-components";
import { keyframes } from 'styled-components'

const Heading = keyframes`
     0%, 20% 60%, 100%{
        ---webkit-transform: translateY(0);
        transform: translateY(0)
    }
    40% {
     ---webkit-transform: translateY(-20px);
        transform: translateY(-20px)

    }
    80%{
     ---webkit-transform: translateY(-18px);
        transform: translateY(-10px)
    }
`


export const Card = styled.div`
    width: 200px;
    margin: 1rem;
    :hover{animation: ${Heading} 1s};
`

export const ButtonsTag = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    button{
        width: 100%;
        background-color: #35ACCE;
        border: none;
        color: white;
        cursor: pointer;
        &:hover{
            background-color: #006593;
        }
    }
    grid-row: 3;
    button {
        margin: 5px;
    }
`

export const ImgTag = styled.div`
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 40px;
    
`

export const ContainerPai = styled.div`
    width: auto;
`