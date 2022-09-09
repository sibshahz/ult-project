
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

  export const addTask=async (taskDetails)=>{

    // taskTitle,
    //     overview,
    //     startDate:encodeDateInString(startDate),
    //     endDate:encodeDateInString(endDate),
    //     status,
    //     priority,
    //     projectRef:selectedProject.id

    const {taskTitle,startDate,endDate,overview,priority,status,projectRefId}=taskDetails;
    const projectRef = doc(db, "projects",projectRefId);
    try{
        const res=await addDoc(collection(db, "tasks"), {
            taskTitle,
            overview,
            startDate,
            endDate,
            priority,
            status,
            projectRef,
            createdOn:new Date(),
          });
    }catch(e){
        console.error("Error: ", e.message);
    }
  };

  export const deleteTask=async (id)=>{
    await deleteDoc(doc(db, "tasks",id));
  }

  export const editTask=async (taskId,taskDetails)=>{
    const {editProjectTitle,editStartDate,editEndDate,editOverview,editPriority,editStatus}=taskDetails;
    const id=taskId;
    const examcollref = doc(db,'tasks', id)
    await updateDoc(examcollref,{
        taskTitle:editProjectTitle,
        overview:editOverview,
        startDate:editStartDate,
        endDate:editEndDate,
        priority:editPriority,
        status:editStatus
    } ).catch(error =>{
      console.log(error.message)
    }); 
  }