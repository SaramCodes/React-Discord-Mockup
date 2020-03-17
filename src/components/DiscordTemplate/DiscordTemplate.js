import React, {useState} from "react";
import {MainContainer, UserBarContainer, SeverNameContainer, ChatMainContainer} from "./Styles.js";
import NavigationUser from "./NavigationUser.js";

const DiscordTemplate = () => {

    const [addChatVisible, setAddChatVisible] = useState({visible: false, btnActive: true});
    
    let addChatModelVisible = addChatVisible.visible ? "add-chat-modal-container add-chat-modal-container-show" : "add-chat-modal-container";
    let addChatModalAnimation = addChatVisible.btnActive ? "add-chat-modal" : "add-chat-modal-close";
    
    const openAddChatModal = (e) => {
        if (!addChatVisible.btnActive) return;
        setAddChatVisible({visible: true, btnActive: addChatVisible.btnActive})
    };

    const closeAddChatBg = () => {
        setAddChatVisible({visible: true, btnActive: false});
        setTimeout(() => {
            setAddChatVisible({visible: false, btnActive: true});
        }, 200)
    }
    
    return(
        <MainContainer>
            
            <div className={addChatModelVisible}>
                <div onClick={closeAddChatBg} className="close-modal" />
                <div className={addChatModalAnimation}>
                    <div className="new-chat-heading">
                        <h5>New Chat</h5>
                        <div class="new-chat-close" onClick={closeAddChatBg}></div>
                    </div>
                </div>
            </div>
            
            <UserBarContainer>
                <div onClick={openAddChatModal} className="add-chat">
                    +
                </div>
                <NavigationUser />
            </UserBarContainer>
            <SeverNameContainer>
                <div className="server-name-heading">
                    <h5>Server Name</h5>
                </div>
                
                <ul className="server-list">
                    <li className="server server-active"><p><span>#</span>general</p></li>                    
                    <li className="server"><p><span>#</span>bananas</p></li>                    
                </ul>

            
            </SeverNameContainer>
            <ChatMainContainer>
            <div className="chat-name-heading">
                    <h5><span>#</span>general</h5>
            </div>
            <div className="chats">
                <div className="chat">
                    <div className="chat-avatar"></div>
                    <div className="chat-body">
                        <div className="chat-user">
                            John Doe
                            <span>
                            2/1/2020 4:28:56 AM
                            </span>
                        </div>
                        <div className="chat-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eum quibusdam omnis quis eos consequatur! Rerum labore vitae excepturi eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore, illo saepe eligendi provident non vel accusantium inventore vero
                        </div>
                    </div>

                    
                </div>

            </div>
            </ChatMainContainer>
        </MainContainer>
    );
}


export default DiscordTemplate