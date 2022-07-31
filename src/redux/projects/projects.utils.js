
import { db } from "../../firebase/firebase";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";
export const addProject=async ()=>{
    
    const res=await addDoc(collection(db, "projects"), {
        projectName:'First Project',
        projectCountry:'Pakistan'
      });

      
    console.log('Added document with ID: ', res.id);

    console.log('RES is: ',res);
}
