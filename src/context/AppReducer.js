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
                    inactive: state.Data.inactive
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

        default:
            return state;
    }
}