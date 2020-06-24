import React, {createContext, useReducer} from "react";
import Data from "./data.json"
import AppReducer from "./AppReducer.js";


const initialState = {
    Data,
    addChatVisible: {
        visible: false, btnActive: true
    }
}


// Create Context
export const GlobalContext = createContext();


// Provider Component
export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);


    const activeInactiveUser = (id) => {
        dispatch({
            "type": "ACTIVE_USER",
            "payload": id
        })
    }

    const changeUser = (id) => {
        dispatch({
            "type": "CHANGE_USER",
            "payload": id
        })
    }

    const openAddChatModal = (e) => {
        dispatch({
            "type": "OPEN_ADD_MODAL",
            "payload": {visible: true, btnActive: true}
        })
    };

    const closeAddChatBg = () => {
        dispatch({
            "type": "CLOSE_ADD_MODAL",
            "payload": {visible: false, btnActive: true}
        })

    }
    return(
        <GlobalContext.Provider value={{
            ...state,
            activeInactiveUser,
            openAddChatModal,
            closeAddChatBg,
            changeUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}