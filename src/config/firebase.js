import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAHmaTYrGL5ux2hujLjJPsuh5BTNf95XYI",
    authDomain: "revents-fd42e.firebaseapp.com",
    databaseURL: "https://revents-fd42e.firebaseio.com",
    projectId: "revents-fd42e",
    storageBucket: "",
    messagingSenderId: "518010162260",
    appId: "1:518010162260:web:1a52728a0ffdf03a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;