import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSrirXJN4LnNp-2h8raAIxQjrthfxfi5s",
    authDomain: "facebook-messenger-clone-7da96.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-7da96.firebaseio.com",
    projectId: "facebook-messenger-clone-7da96",
    storageBucket: "facebook-messenger-clone-7da96.appspot.com",
    messagingSenderId: "669323702201",
    appId: "1:669323702201:web:34cb043b74f8155e651068"
});

const db = firebaseApp.firestore();
export default db;