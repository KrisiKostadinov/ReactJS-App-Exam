import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCnrm2ZWUiOOX5NO0w6ll9kINuHjcmUNWM",
    authDomain: "reactjs-app---cads.firebaseapp.com",
    projectId: "reactjs-app---cads",
    storageBucket: "reactjs-app---cads.appspot.com",
    messagingSenderId: "593133242516",
    appId: "1:593133242516:web:fcbd52fa1b6e20aed1cc81",
    measurementId: "G-3QRM84PM7V"
};

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
    return firebase.auth().signOut();
}

export function isAuthenticated() {
    return getUserInfo();
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        saveUserInfo(user);
    } else {
        removeUserInfo();
    }
});

export function saveUserInfo(user) {
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
}

export function removeUserInfo() {
    localStorage.removeItem('user');
}

export function getUserInfo() {
    return JSON.parse(localStorage.getItem('user'));
}