import React, {useContext} from "react";
import {ChatMainContainer} from "./Styles.js";
import {GlobalContext} from "../../context/GlobalState.js";


const ChatBar = () => {

    const {Data} = useContext(GlobalContext);

    let activeUser = Data.active.find(user => {if(user.isActive){ return user}} )
    

    return (
       
       
       <ChatMainContainer>
            <div className="chat-name-heading">
                    <h5><span>#</span>general</h5>
            </div>
            <div className="chats">
                
                {activeUser.chats ? activeUser.chats.map(chat => (
                    
                    <div className="chat">
                        <div className="chat-avatar">
                            <img src={activeUser.avatar} />
                        </div>
                        <div className="chat-body">
                            <div className="chat-user">
                                {activeUser.username}
                                <span>
                                    {chat.time}
                                </span>
                            </div>
                            <div className="chat-content">
                                {chat.body}
                            </div>
                        </div>    
                    </div>   

                ))
                : <div className="empty-chat"><h5 >Send a message to initiate conversation...</h5></div>}
                
              

            </div>
        </ChatMainContainer>
    )
}

export default ChatBar;