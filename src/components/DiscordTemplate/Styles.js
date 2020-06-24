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
        overflow-y: auto;
        height: 300px;
        width: 600px;
        background-color: ${props => props.theme.mode === "dark" ? lightDarkBg : lightLightBg};
        z-index: 2;
        position: relative;
        animation-name: float-in;
        animation-duration:0.3s;
        animation-timing-function: cubic-bezier(0,0.59,0.25,1);
        animation-fill-mode: forwards;
        .empty-new-users{
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin-top: 50px;
            color: ${props => props.theme.mode === "dark" ? "#fff" : "#000" };
        }
    }

    .add-chat-modal-close{
        height: 300px;
        width: 600px;
        background-color: ${props => props.theme.mode === "dark" ? lightDarkBg : lightLightBg};
        z-index: 2;
        position: relative;
        animation-name: float-out;
        animation-duration: 0.3s;
        animation-timing-function: cubic-bezier(0,0.59,0.25,1);
        animation-fill-mode: forwards;
    }

    .new-chat-user{
        height: 70px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${props => props.theme.mode === "dark" ? mediumDarkBg : mediumLightBg};
        img{
            max-width: 50px;
            border-radius: 100%;
            margin-right: 20px;
        }

        h5{
            color: ${props => props.theme.mode === "dark" ? "#fff" : "#000" };
        }
        &:hover{
            cursor: pointer;
            background: ${props => props.theme.mode === "dark" ? "#4d5158" : "#bbb"};
            border-bottom: 0px solid ${props => props.theme.mode === "dark" ? mediumDarkBg : mediumLightBg};
            
        }
    }

    .new-chat-heading{
        height: 60px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${props => props.theme.mode === "dark" ? mediumDarkBg : mediumLightBg};


        h5{
            color: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
            font-weight: 600;
            font-size: 14px;
        }

        .new-chat-close{
            height:15px;
            width:15px;
            position: relative;
            cursor: pointer;    
            &:after, &:before{
                content: '';
                height: 15px;
                width: 3px;
                border-radius: 1px;
                position: absolute;
                background-color: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
                left: 45%;
            }            
            &:after{
                transform: rotate(45deg);
            }
            &:before{
                transform: rotate(-45deg);
            }
        }
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
    @keyframes float-out{
        from{
            opacity: 1;
            transform: scale(1) rotateY(0deg);
        }
        to{
            opacity: 0;
            transform: scale(0.95) rotateY(30deg);
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
        line-height: 55px;
        text-align: center;
        font-size: 35px;
        color: ${props => props.theme.mode === "dark" ? "#535559" : "#7f7f7f" };




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
        background-color:  ${props => props.theme.mode === "dark" ? "#43464c"  : "#BCB9B3"};
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        img{
            max-width: 100%;
            border-radius: 100%
        }
    }
`;

export const ServerNameContainer = styled.div`
    height: 100%;
    flex-basis: 250px;
    flex-shrink: 0;
    background-color:  ${props => props.theme.mode === "dark" ? mediumDarkBg : mediumLightBg };
    
    .server-name-heading{
        padding: 0 20px;
        height: 60px;
        border-bottom: 1px solid ${props => props.theme.mode === "dark" ? darkDarkBg : darkLightBg};
        line-height: 60px;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        h5{
            font-size: 14px;
            user-select: none;
            font-weight: 600;
            color: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
        }
    }

    .server-list{
        list-style:none;
        padding: 20px 0;
    }
    
    .server{
        display: block;
        padding: 0 10px;
        margin-bottom: 2px;
        p{
            cursor: pointer;
            user-select: none;
            padding: 10px 10px;
            font-weight: 600;
            color: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
            font-size: 14px;
            border-radius: 7px;
            &:hover{
                background-color: ${props => props.theme.mode === "dark" ? lightDarkBg : lightLightBg };
            }
            span{
                color: ${props => props.theme.mode === "dark" ? "#8a8e93" : "#707070"};
            }
        }
    }

    .server-active{
        p{
            background-color: ${props => props.theme.mode === "dark" ? "#43464c" : "#BCB9B3" };
            &:hover{
                background-color: ${props => props.theme.mode === "dark" ? "#43464c" : "#BCB9B3" };
            }
        }
    }

`;

export const ChatMainContainer = styled.div`
    height: 100%;
    flex-grow: 1;
    background-color:  ${props => props.theme.mode === "dark" ? lightDarkBg : lightLightBg };


    .chat-name-heading{
        height: 60px;
        border-bottom: 1px solid ${props => props.theme.mode === "dark" ? darkDarkBg  : darkLightBg};
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        line-height: 60px;
        padding: 0 20px;
        h5{
            
            font-size: 20px;
            font-weight: 700;
            color: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
            span{
                margin-right: 5px;
                color: ${props => props.theme.mode === "dark" ? "#8a8e93" : "#707070"};
            }
        }
    }


    .chats{
        padding: 0 20px;
        height: calc(600px - 150px);
        overflow: auto;
        overflow-x: hidden;
        .empty-chat{
            height: 100%;
            display: flex;
            align-items:center;
            justify-content: center;
            
            h5{
                color: #fff;
                font-size: 20px;
                font-weight: lighter;    
            }
        }
    }

    .chat{
        padding: 20px;
        border-bottom: 1px solid ${props => props.theme.mode === "dark" ? "#43464c"  : "#BCB9B3"};
        display: flex;
        
    }

    .chat-avatar{
        img{
            max-width: 100%;
            border-radius: 100%;
        }
        width: 40px;
        flex-basis: 40px;
        flex-shrink: 0;
        height: 40px;
        margin-right: 20px;
        border-radius: 50%;
        background-color: ${props => props.theme.mode === "dark" ? "#43464c"  : "#BCB9B3"};
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .chat-body{
        flex-grow: 1;
    }

    .chat-user{
        color: crimson;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 6px;
        span{
            color: ${props => props.theme.mode === "dark" ? "#686c75"  : "#97938A"};
            font-size: 9px;
            margin-left: 6px;
            font-weight:400;
        }
    }

    .chat-content{
        width: 100%;
        line-height: 1.5;
        color: ${props => props.theme.mode === "dark" ? "#ddd"  : "#111"};
        font-weight: 400;
        font-size: 14px;
    }
`;