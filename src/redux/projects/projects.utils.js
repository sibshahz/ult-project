
import { db } from "../../firebase/firebase";
import {
    getFirestore,
    query,
    onSnapshot,
    getDocs,
    collection,
    deleteDoc,
  updateDoc,
    doc,
    where,
    addDoc,
    orderBy,
    setDoc,
    getDoc,
    connectFirestoreEmulator
  } from "firebase/firestore";

export const editProject=async (projectId,projectDetails)=>{
  const {editProjectTitle,editStartDate,editEndDate,editOverview,editPriority,editStatus}=projectDetails;
  const id=projectId;
  const examcollref = doc(db,'projects', id)
  await updateDoc(examcollref,{
      projectTitle:editProjectTitle,
      overview:editOverview,
      startDate:editStartDate,
      endDate:editEndDate,
      priority:editPriority,
      status:editStatus
  } ).catch(error =>{
    console.log(error.message)
  }); 
}
export const addProject=async (projectDetails)=>{
  const {projectTitle,startDate,endDate,overview,priority,status,projectAuthor}=projectDetails;
    const authorRef = doc(db, "users",projectAuthor);
    const res=await addDoc(collection(db, "projects"), {
        projectTitle,
        overview,
        startDate,
        endDate,
        priority,
        status,
        projectAuthor:authorRef,
      });

}
export const deleteProject=async (id)=>{
  await deleteDoc(doc(db, "projects",id));
}
export const getProjectsList=async ()=>{
  
  
  let projects=[];
  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {

  // projects.push({...doc.data(),id: doc.id});
  
  projects.push({
    projectTitle:doc.data().projectTitle,
    overview:doc.data().overview,
    startDate:doc.data().startDate.toDate().toDateString(),
    endDate:doc.data().Date.toDate().toDateString(),
    status:doc.data().status,
    priority:doc.data().priority,
    id: doc.id});
  
  });
  return projects;

}
