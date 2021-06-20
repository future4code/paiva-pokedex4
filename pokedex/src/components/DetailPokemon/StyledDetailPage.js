import styled from "styled-components";
import backPoke from "../../img/backPoke.jpeg"

export const Container = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backPoke});
    background-repeat: repeat;
`
export const Identificacao = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.4rem;
    line-height: 0;
`

export const Button = styled.div`
    margin-bottom: 1rem;
    button{
        border-radius: 10px;
        border: none;
        padding: 0.5rem;
        background-color: #30a7d7;
        cursor: pointer;

    }
`

export const Pokemon = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Img = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    img{
        background-color: #f2f2f2;
        padding: 3rem;
    }
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
         height: 160px;
         width: 160px;
     }
     .seg {
         height: 160px;
         width: 160px; 
     }

`

export const About = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;

`

export const Type = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid darkblue;
    flex-wrap: wrap;
    color: black;
    div{
        display: flex;
        width: 6rem;
        height: 3rem;
        justify-content: center;
        margin: 0.3rem;
        border-radius: 10px;
        background-color: #f2f2f2;
    }
`

export const Abilities = styled.div`
    width: 100%;
    min-height: 50%;
    max-height: 50%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid darkblue;
    flex-wrap: wrap;    
    overflow-y:hidden; 
    overflow:scroll; 
    ::-webkit-scrollbar {
    display: none; 
    }
`

export const DivGraf = styled.div`
    margin-top: 1rem;
    width: 600px;
    background-color: #35acce;
`;

export const ValorPlot = styled.p`
  width: ${(props) => props.valor};
  color: white;
  background-color: white;
  color: black;

`;
