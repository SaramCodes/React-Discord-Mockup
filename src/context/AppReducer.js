export default (state, action) => {

    switch(action.type){

        case "ACTIVE_USER" :
            const newState = {
                ...state,
                Data: {
                    active: state.Data.active.concat(state.Data.inactive.filter(user => user.id === action.payload)).map(user => {
                        if(user.id === action.payload){
                            user.isActive = true;
                            return user;
                        } else{
                            user.isActive = false;
                            return user;
                        }
                    }),
                    inactive: state.Data.inactive.filter(user => user.id !== action.payload),
                    global: state.Data.global.map(server => {
                        server.isActive = false;
                        return server;
                    })
                },

                addChatVisible: {visible: false, btnActive: true}

            }

            
            return newState


        case 'CHANGE_USER':
            return{
                ...state,
                Data: {
                    active: state.Data.active.concat(state.Data.inactive.filter(user => user.id === action.payload)).map(user => {
                        if(user.id === action.payload){
                            user.isActive = true;
                            return user;
                        } else{
                            user.isActive = false;
                            return user;
                        }
                    }),
                    inactive: state.Data.inactive,
                    global: state.Data.global.map(server => {
                        server.isActive = false;
                        return server;
                    })

                }
            }

        case "OPEN_ADD_MODAL":
            return{
                ...state,
                addChatVisible: action.payload
            }
        
        case "CLOSE_ADD_MODAL":
            return{
                ...state,
                addChatVisible: action.payload
            }
        

        case "CHANGE_SERVER":
            const myState = {
                ...state,
                Data: {
                    active: state.Data.active.map(user => {
                        user.isActive = false;
                        return user;
                    }),
                    inactive: state.Data.inactive,
                    global: state.Data.global.map(server => {
                        action.payload === server.id ? server.isActive = true : server.isActive = false
                        return server;
                    })
                }
            }
            return myState;

        default:
            return state;
    }
}