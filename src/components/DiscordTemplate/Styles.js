import styled from "styled-components";

const darkDarkBg = "#1e2124";
const mediumDarkBg = "#2f3137";
const lightDarkBg = "#373a3f";
const darkLightBg = "#bbb";
const mediumLightBg = "#ccc";
const lightLightBg = "#ddd";

export const MainContainer = styled.div`
    background-color: ${props => props.theme.mode === "dark" ? darkDarkBg : darkLightBg };
    position: relative;
    margin: auto;
    height: 600px;
    width: 1000px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    display: flex;
    
    div{
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0,0.59,0.25,1);
    }

    .add-chat-modal-container{
        z-index: 2;
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.6);
        display: none;
    }

    .add-chat-modal-container-show{
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .add-chat-modal{
        height: 300px;
        width: 600px;
        background: red;
        z-index: 2;
        position: relative;
        animation-name: float-in;
        animation-duration:0.3s;
        animation-timing-function: cubic-bezier(0,0.59,0.25,1);
        animation-fill-mode: forwards;
    }

    .close-modal{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    @keyframes float-in{
        from{
            opacity: 0;
            transform: scale(0.95) rotateY(30deg);
        }
        to{
            opacity: 1;
            transform: scale(1) rotateY(0deg);
        }
    }

`;

export const UserBarContainer = styled.div`
    height: 100%;
    flex-basis: 70px;
    flex-shrink: 0;
    background-color: ${props => props.theme.mode === "dark" ? darkDarkBg : darkLightBg };
    padding: 20px 0;
    overflow-x: hidden;
    
    .add-chat{
        user-select: none;
        cursor: pointer;
        height: 50px;
        width: 50px;
        border: 1px dashed ${props => props.theme.mode === "dark" ? "#535559" : "#7f7f7f" }; 
        margin: 0 auto 40px auto;
        border-radius: 50%;
        line-height: 50px;
        text-align: center;
        font-size: 35px;
        color: ${props => props.theme.mode === "dark" ? "#535559" : "#7f7f7f" };


        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0,0.59,0.25,1);


        &:hover{
            border-radius: 10px;
            color: ${props => props.theme.mode === "dark" ? "#fff" : "#000" };
            border-color: ${props => props.theme.mode === "dark" ? "#fff" : "#000" };
        }
    }
    
    .navigate-user-container{

        height: 50px;
        width: 50px;
        position: relative;
        margin: 0 auto 40px auto;
        cursor: pointer;

    }

    .navigate-active{
        &:before{
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0,0.59,0.25,1);
            content: "";
            height: 90%;
            border-radius: 22px;
            width: 9px;
            top: 50%;
            left: -15px;
            background: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
            position: absolute;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%)
        }
    }

    .navigate-user{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: crimson;
    }
`;

export const SeverNameContainer = styled.div`
    height: 100%;
    flex-basis: 250px;
    flex-shrink: 0;
    background-color:  ${props => props.theme.mode === "dark" ? mediumDarkBg : mediumLightBg };

`;

export const ChatMainContainer = styled.div`
    height: 100%;
    flex-grow: 1;
    background-color:  ${props => props.theme.mode === "dark" ? lightDarkBg : lightLightBg };

`;