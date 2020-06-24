import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState.js";


const NewChatUser = props => {

    const {activeInactiveUser} = useContext(GlobalContext);
    return(
        <div className="new-chat-user" onClick={() => activeInactiveUser(props.userId)}>
            <img src={props.avatar} />
            <h5>{props.name}</h5>
        </div>
    )

}

export default NewChatUser;