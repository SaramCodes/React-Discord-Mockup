import React, {useContext} from "react";
import {ServerNameContainer} from "./Styles.js";
import  {GlobalContext} from "../../context/GlobalState.js";



const ServerBar = () => {

    const {Data} = useContext(GlobalContext);
    const {changeServer} = useContext(GlobalContext);

    
    
    return(
        <ServerNameContainer>
            <div className="server-name-heading">
                <h5>Server Name</h5>
            </div>
            
            <ul className="server-list">
                {Data.global.map((server, key) => (
                <li onClick={() => changeServer(server.id)} key={key} className={"server " + (server.isActive ? 'server-active' : '')}><p><span>#</span>{server.server}</p></li>
                ))}
                               
            </ul>
        </ServerNameContainer>
    )
}

export default ServerBar;


