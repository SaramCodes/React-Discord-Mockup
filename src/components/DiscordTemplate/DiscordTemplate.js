import React from "react";
import {MainContainer, UserBarContainer, SeverNameContainer, ChatMainContainer} from "./Styles.js";
import NavigationUser from "./NavigationUser.js";

const DiscordTemplate = () => {
    return(
        <MainContainer>
            <UserBarContainer>
                <div className="add-chat">
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