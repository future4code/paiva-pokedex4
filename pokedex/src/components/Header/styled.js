import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 6rem;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    img:hover {
        cursor: pointer;
    }

    button {
        border: none;
        margin: 1rem;
        background-color: #30a7d7;
        cursor: pointer;
        height: 20px;
        border-radius: 5px;
        color: white;


    }

    p {
        padding-right: 20px;
        margin: 1rem;
    }
`
export const Logo = styled.img`
    width: 170px;
    margin: 1rem;
`
export const UserLoggin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`