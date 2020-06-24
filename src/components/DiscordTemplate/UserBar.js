import React, {useContext} from "react";
import {UserBarContainer} from "./Styles.js";
import {GlobalContext} from "../../context/GlobalState.js";
import NavigationUser from "./NavigationUser";


const UserBar = ({openAddChatModal}) => {

    const {Data} = useContext(GlobalContext);
    return(
        <UserBarContainer>
            <div onClick={openAddChatModal} className="add-chat">
            +
            </div>

            {Data.active.map(user => (
                <NavigationUser key={user.id} avatar={user.avatar} isActive={user.isActive} userId={user.id} />
            ))}
            
        </UserBarContainer>
    )
}

export default UserBar;