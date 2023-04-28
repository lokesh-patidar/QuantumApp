import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
     

    // apiKey: "AIzaSyBgjwzguc3T279ENebbYKFYRdIJ1FfHBb8",
    // authDomain: "quantum-tech.firebaseapp.com",
    // // databaseURL: "https://quantum-tech-default-rtdb.firebaseio.com",
    // projectId: "quantum-tech",
    // storageBucket: "quantum-tech.appspot.com",
    // messagingSenderId: "238526141371",
    // appId: "1:238526141371:web:4cb0f647773f4a85e46a9e",
    // measurementId: "G-Y5BX08CM2T"


    apiKey: "AIzaSyBMRIwiSBdvCuwZJ7i60j5FyhaXqMNP0LU",
    authDomain: "quantum-tech-ff4e8.firebaseapp.com",
    projectId: "quantum-tech-ff4e8",
    storageBucket: "quantum-tech-ff4e8.appspot.com",
    messagingSenderId: "638490631504",
    appId: "1:638490631504:web:4b51b2cefefc9160f4e055",
    measurementId: "G-NNMBZCT19W"

  //   apiKey: "AIzaSyDWNy0RwcadYzIS9oq1TOX3glqNF6BUVuY",
  // authDomain: "ai-pedia-1676033385412.firebaseapp.com",
  // projectId: "ai-pedia-1676033385412",
  // storageBucket: "ai-pedia-1676033385412.appspot.com",
  // messagingSenderId: "480125108716",
  // appId: "1:480125108716:web:d9d0899111286a00fdc0c9",
  // measurementId: "G-1Z2JNWG405"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider }