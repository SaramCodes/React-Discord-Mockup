import React, {useContext} from "react";
import {ChatMainContainer} from "./Styles.js";
import {GlobalContext} from "../../context/GlobalState.js";


const ChatBar = () => {

    const {Data} = useContext(GlobalContext);

    let activeUser = Data.active.find(user => {if(user.isActive){ return user}} )

    let activeServer = Data.global.find(server => {if(server.isActive){ return server}} )

    return (
       
       
       <ChatMainContainer>
            <div className="chat-name-heading">
                    {activeUser ? 
                     <h5>{activeUser.username}</h5>
                    : <h5><span>#</span>{activeServer.server}</h5>}
                   

                    
            </div>
            <div className="chats">
                
                {activeUser ? 
                    activeUser.chats ? activeUser.chats.map((chat, key) => (
                    
                        <div key={key} className="chat">
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
                    : <div className="empty-chat"><h5 >Send a message to initiate conversation...</h5></div>
                : ""}

                {activeServer ? 
                    activeServer.chats ? activeServer.chats.map((chat, key) => (
                    
                        <div key={key} className="chat">
                            <div className="chat-avatar">
                                <img src={chat.avatar} />
                            </div>
                            <div className="chat-body">
                                <div className="chat-user">
                                    {chat.username}
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
                    : <div className="empty-chat"><h5 >Send a message to initiate conversation...</h5></div>
                : ""}
                
              

            </div>
        </ChatMainContainer>
    )
}

export default ChatBar;