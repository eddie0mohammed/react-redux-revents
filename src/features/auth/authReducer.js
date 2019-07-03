import * as actionTypes from './authConstants'

const initialState = {
    authenticated: false,
    currentUser: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                authenticated: true,
                currentUser: action.payload.creds.email
            }
        case actionTypes.SIGN_OUT_USER:
            return {
                ...state,
                authenticated: false,
                currentUser: null
            }
        
        default:
            return state;
    }
}

export default authReducer; 