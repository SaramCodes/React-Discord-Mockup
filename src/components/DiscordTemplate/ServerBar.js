import React from "react";
import {ServerNameContainer} from "./Styles.js";

const ServerBar = () => {
    return(
        <ServerNameContainer>
            <div className="server-name-heading">
                <h5>Server Name</h5>
            </div>
            
            <ul className="server-list">
                <li className="server server-active"><p><span>#</span>general</p></li>                    
                <li className="server"><p><span>#</span>bananas</p></li>                    
                <li className="server"><p><span>#</span>Main Chat</p></li>                    
            </ul>
        </ServerNameContainer>
    )
}

export default ServerBar;


