import React, {useState} from "react";
import {MainContainer, UserBarContainer, SeverNameContainer, ChatMainContainer} from "./Styles.js";
import NavigationUser from "./NavigationUser.js";

const DiscordTemplate = () => {

    const [addChatVisible, setAddChatVisible] = useState(false);
    
    let addChatModelVisible = addChatVisible ? "add-chat-modal-container add-chat-modal-container-show" : "add-chat-modal-container";
    
    const addChatModal = (e) => {
        e.stopPropagation(); 
        setAddChatVisible(!addChatVisible)
    };

    const closeAddChatBg = () => {
        
        setAddChatVisible(!addChatVisible);
    }
    
    return(
        <MainContainer>
            
            <div className={addChatModelVisible}>
                <div onClick={closeAddChatBg} className="close-modal" />
                <div className="add-chat-modal">
                </div>
            </div>
            
            <UserBarContainer>
                <div onClick={addChatModal} className="add-chat">
                    +
                </div>
                <NavigationUser />
            </UserBarContainer>
            <SeverNameContainer>

            </SeverNameContainer>
            <ChatMainContainer>

            </ChatMainContainer>
        </MainContainer>
    );
}


export default DiscordTemplate