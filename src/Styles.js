import styled, {createGlobalStyle} from "styled-components";


const bgDark = "#110513";
const bgLight = "#fef7ff";


export const GlobalCSS = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6,p,span,li,input,button,a{
        font-family: "Spartan", "Arial", sans-serif;
    }

    html, body{
      height: 100%;
    }

    body{
        transition-duration:0.3s;
        transition-timing-function: cubic-bezier(0, 0.59, 0.25, 1);
        background-color: ${props => props.theme.mode === "dark" ? "#000" :"#fff"}
    }

    #root{
        max-width: 1300px;
        width: 90%;
        margin: auto;
        padding: 50px 0;
        
    }

    nav{
        margin-bottom: 50px;
    }

`;


export const Button = styled.a`
    display: inline-block;
    background-color: transparent;
    font-size: 12px;
    font-weight: 700;
    padding: 13px 27px;
    border-radius: 3px;
    color: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
    cursor: pointer;
    border: 3px solid ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
    box-shadow: 0 0 0 0 transparent;
    letter-spacing: 1px;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 0.59, 0.25, 1);
    text-align:center;
    user-select: none;
    transform: scale(1);

    span{
        font-size:15px;
    }

    &:hover{
        letter-spacing: 5px;
    }
    &:active{
        transform: scale(0.98);
        border-radius: 0;
        box-shadow: 5px 10px 0 0 ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
    }
    
`;


export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 0.59, 0.25, 1);
    text-align: center;
    text-transform: capitalize;
    color: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
    margin-bottom: 50px;
`;


