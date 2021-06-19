import styled from "styled-components";
import backgroundLigth from "../../img/backgroundLigth.png"

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundLigth});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
`
export const Identificacao = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.4rem;
`

export const Button = styled.div`
    margin-bottom: 1rem;
    button{
        border-radius: 10px;
        border: none;
        padding: 0.5rem;
        background-color: #30a7d7;
        cursor: pointer;
        color: white;

    }
`

export const Pokemon = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
`

export const Img = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        background-color: #f2f2f2;
        padding: 3rem;
        border: 1px solid black;
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
         height: 200px;
         width: 200px;
     }
     .seg {
         height: 200px;
         width: 200px; 
     }

`

export const About = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

`

export const Type = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #313131;
    color: #c1c1c1;
    div{
        display: flex;
        justify-content: center;
        width: 6vw;
        border-radius: 60%;
    }
`

export const Card1 = styled.div`
    display: flex;
    color: #c1c1c1;


    div{
        display: flex;
        max-height: 60vh;

    }

`
export const Abilities = styled.div`
    width: 50%;
    height: 60vh;
    flex-direction: column;
    background-color: #313131;
    padding: 0 0 0 1rem;
    margin: 1rem;
    border-radius: 40px / 20px 25em 30px 35em;
    overflow-y:hidden; 
    overflow:scroll; 
    ::-webkit-scrollbar {
    display: none;
    }

   
`

export const Stats = styled.div`
    width: 50%;
    min-height: 60vh;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: #313131;
    padding: 0 0 0 1rem;
    margin: 1rem;
    border-radius: 40px / 20px 25em 30px 35em;
    overflow-y:hidden; 
    overflow:scroll; 
    ::-webkit-scrollbar {
    display: none;
    }
`
