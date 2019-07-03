import * as actionTypes from './authConstants';
import {closeModal} from '../modals/ModalActions';

export const login = (creds) => {
    return dispatch => {
        dispatch({type: actionTypes.LOGIN_USER, payload: {creds}});
        dispatch(closeModal());
    }
}

export const logout = () => {
    return {
        type: actionTypes.SIGN_OUT_USER
    }
} 