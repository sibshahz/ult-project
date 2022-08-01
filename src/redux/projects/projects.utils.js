
import { db } from "../../firebase/firebase";
import {
    getFirestore,
    query,
    getDocs,
    collection,
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

export const getProjectsList=async ()=>{
  // const q = query(collection(db, "projects"), orderBy("priority", "desc"));
  // const docs = await getDocs(q);
  // console.log("RESULT PROJECTS ARE: ",docs.docs);
  let projects=[];
  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {
  // console.log(`${doc.id} => ${doc.data()}`);
  // 
      // console.log("DATA IS: ",doc.data());
  projects.push(doc.data());
  
  });
  // console.log("PROJECTS ARE: ARRAY: ",projects);
  // console.log("🚀 ~ file: projects.utils.js ~ line 47 ~ getProjectsList ~ projects", projects)

  return projects;
}
