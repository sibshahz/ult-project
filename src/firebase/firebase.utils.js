
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection } from "firebase/firestore"; 
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword 
  ,setPersistence, signInWithEmailAndPassword, browserSessionPersistence} from "firebase/auth";
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
const db = getFirestore(app);
export const auth = getAuth(app);
auth.languageCode = 'it';

// export const firestore=app.firestore();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const createNewUser=async (name,email,password)=>{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
      password
    });

    console.log("Document written with following details: ", docRef.name,docRef.email);
  } catch (e) {
    console.error("Error adding document: ", e.message);
  }
}
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    // return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
// createUserWithEmailAndPassword(auth,email,password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("ERROR CODE: ",errorCode+errorMessage);
//   });
export const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth);
    },reject);
  });
}

// export const signInWithGoogle=()=> auth.signInWithPopup(googleProvider);
export const signInWithGoogle=()=>signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
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