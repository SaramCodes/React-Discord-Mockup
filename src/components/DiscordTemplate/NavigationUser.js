import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState.js";


const NavigationUser = (props) => {

    const {changeUser} = useContext(GlobalContext);


    return(
        <div onClick={() => {changeUser(props.userId)}} className={`navigate-user-container ${props.isActive ? "navigate-active" : ""}`}>
            <div className="navigate-user">
            <img src={props.avatar} />
            </div>  
        </div>
    );
}

export default NavigationUser;