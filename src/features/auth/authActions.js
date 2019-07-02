import * as actionTypes from './authConstants';

export const login = (creds) => {
    return {
        type: actionTypes.LOGIN_USER,
        payload: {
            creds
        }
    }
}

export const logout = () => {
    return {
        type: actionTypes.SIGN_OUT_USER
    }
}