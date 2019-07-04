import {toastr} from 'react-redux-toastr';

export const updateProfile = (user) => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const {isEmpty, isLoaded, ...updatedUser} = user;
        try{
            await firebase.updateProfile(updatedUser);
            toastr.success('Success', 'Your profile has been updated');

        }catch(error){
            console.log(error);
        }
    }
}