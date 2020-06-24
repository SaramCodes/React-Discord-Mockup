import React, {useState, useContext} from "react";
import {MainContainer} from "./Styles.js";
import NewChatUser from "./NewChatUser.js";
import UserBar from "./UserBar.js";
import ServerBar from "./ServerBar.js";
import ChatBar from "./ChatBar.js";
import {GlobalContext} from "../../context/GlobalState.js";

const DiscordTemplate = () => {

    const {Data} = useContext(GlobalContext);
    const {addChatVisible} = useContext(GlobalContext);
    const {openAddChatModal} = useContext(GlobalContext);
    const {closeAddChatBg} = useContext(GlobalContext);
    

    
    
    let addChatModelVisible = addChatVisible.visible ? "add-chat-modal-container add-chat-modal-container-show" : "add-chat-modal-container";
    let addChatModalAnimation = addChatVisible.btnActive ? "add-chat-modal" : "add-chat-modal-close";
    
   

    let newChatEmpty = false;

    if(Data.inactive.length === 0){
        newChatEmpty = true;
    }

    return(
        <MainContainer>
            
            <div className={addChatModelVisible}>
                <div onClick={closeAddChatBg} className="close-modal" />
                <div className={addChatModalAnimation}>
                    <div className="new-chat-heading">
                        <h5>New Chat</h5>
                        <div className="new-chat-close" onClick={closeAddChatBg}></div>
                    </div>
                    
                    {!newChatEmpty ? 
                    Data.inactive.map((user) => (
                        <NewChatUser name={user.username} key={user.id} userId={user.id} avatar={user.avatar} />
                    )) :
                    <p className="empty-new-users">No users remaining.</p>
                }

                    
                </div>
            </div>
            
            <UserBar openAddChatModal={openAddChatModal} />

            <ServerBar />
            
            <ChatBar />

        </MainContainer>
    );
}


export default DiscordTemplate