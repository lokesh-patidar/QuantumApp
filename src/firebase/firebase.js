import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqTOuAon-0OFX1W0LzIpwe7eXEl3groqc",
    authDomain: "lokeshauth-80775.firebaseapp.com",
    projectId: "lokeshauth-80775",
    storageBucket: "lokeshauth-80775.appspot.com",
    messagingSenderId: "354286541740",
    appId: "1:354286541740:web:267eb17dcf601c6d55f809",
    measurementId: "G-FZDTZ8H1XR"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider }