
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdaBHZwxHHKMe3HWE4_BDys1sThClThdo",
  authDomain: "ultimate-proj.firebaseapp.com",
  projectId: "ultimate-proj",
  storageBucket: "ultimate-proj.appspot.com",
  messagingSenderId: "1038716014971",
  appId: "1:1038716014971:web:7e34715036275a91d1edde",
  measurementId: "G-G6Q6RKGSK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'it';

// export const firestore=app.firestore();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

// export const signInWithGoogle=()=> auth.signInWithPopup(googleProvider);
export const signInWithGoogle=()=>signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("🚀 ~ file: firebase.utils.js ~ line 39 ~ .then ~ user", user);
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export default app;