import {toastr} from 'react-redux-toastr';
import {asyncActionStart, asyncActionFinish, asyncActionError} from '../../async/asyncActions';
import cuid from 'cuid';

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

export const uploadProfileImage = (file, fileName) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const imageName = cuid();
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const path = `${user.uid}/user_images`;
        const options = {
            name: imageName,
            fileName: fileName
        }

        try{
            dispatch(asyncActionStart());
            //upload the file to firebase storage
            let uploadFile = await firebase.uploadFile(path, file, null, options);
            //get url if image
            let downloadURL = await uploadFile.uploadTaskSnapshot.ref.getDownloadURL();
            //get userdoc
            let userDoc = await firestore.get(`users/${user.uid}`);
            //check if user has photo, if not update profile
            if (!userDoc.data().photoURL){
                await firebase.updateProfile({
                    photoURL: downloadURL
                });
                await user.updateProfile({
                    photoURL: downloadURL
                })
            }

            //add image to firestore
            await firestore.add({
                collection: 'users',
                doc: user.uid,
                subcollections: [{collection: 'photos'}] 
            }, {
                name: imageName,
                fileName: fileName,
                url: downloadURL
            }) 
            dispatch(asyncActionFinish());
            
        }catch(error){
            console.log(error);
            dispatch(asyncActionError());
        }
    }
}

export const deletePhoto = (photo) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        try{
            await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`);
            await firestore.delete({
                collection: 'users',
                doc: user.uid,
                subcollections: [{collection: 'photos', doc: photo.id}]
            })
        }catch(error){
            console.log(error);
        }
    }
}

export const setMainPhoto = (photo) => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        try{
            return await firebase.updateProfile({
                photoURL: photo.url
            })

        }catch(error){
            console.log(error);
        }
    }
}
