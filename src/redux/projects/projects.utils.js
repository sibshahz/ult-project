
import { db } from "../../firebase/firebase";
import {
    getFirestore,
    query,
    onSnapshot,
    getDocs,
    collection,
    deleteDoc,
    doc,
    where,
    addDoc,
    orderBy,
  } from "firebase/firestore";
export const addProject=async (projectDetails)=>{
  const {projectTitle,startDate,endDate,overview,priority,status,team}=projectDetails;
  console.log(projectDetails);
    const res=await addDoc(collection(db, "projects"), {
        projectTitle,
        startDate,
        endDate,
        overview,
        priority,
        status,
        team
      });

      
    console.log('Added document with ID: ', res.id);

    console.log('INPUT DATA WAS is: ',projectDetails);
}
export const deleteProject=async (id)=>{
  await deleteDoc(doc(db, "projects",id));
}
export const getProjectsList=async ()=>{
  
  
  let projects=[];
  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {

  projects.push({...doc.data(),id: doc.id});
  
  });
  return projects;


  // const q =await query(collection(db, "projects"));
  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   const projects = [];
  //   querySnapshot.forEach((doc) => {
  //       projects.push({...doc.data(),id:doc.id});
  //       console.log("Data is is: ",{...doc.data(),id: doc.id});
  //   });
  //   return projects;
  // });

}
