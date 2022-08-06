import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setProjectsData } from '../../redux/projects/projects.actions';
import { getProjectsList } from '../../redux/projects/projects.utils';
import { selectCurrentProjects } from '../../redux/projects/projects.selectors';
import FullScreenDialog from '../project-dialog-box/full-screen-dialog.component';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import Projectitem from '../project-item/project-item.component';
import Card from '@mui/material/Card';
import { CircularProgress,Box } from '@mui/material';
import './projects-directory.styles.css';



import { db,auth } from "../../firebase/firebase";
import {
    where,
    query,
    onSnapshot,
    collection,
    getDocs,
  } from "firebase/firestore";
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";


const ProjectsDirectoryHooks=({currentProjects,setProjectsData})=> {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    var unsubscribeFromProjects=undefined;
      if (loading) return;
      if (user){
        console.log("SUCCESS USER IS HERE",user.uid);
        try{
     
          var projectsRef = collection(db, "projects");
          // const q =query(collection(db, user.uid));
      
          const q = query(projectsRef,where("projectAuthor","==",user.uid));
          // const q = query(projectsRef);
        
            unsubscribeFromProjects =onSnapshot(q, (querySnapshot) => {
              const projects = [];
              querySnapshot.forEach((doc) => {
                  projects.push(
                    {
                      ...doc.data(),
                      id:doc.id
                    });
              });
              setProjectsData(projects);
            });
       }catch(e){
        console.error("Error is: ", e.message);
       }
    
      }
      
    }, [user, loading]);
  
 

  
  // handleClick(id,projectTitle){
  //   console.log("HANDLE CLIKC",id+" "+projectTitle);
  // }
    return (
    <div className='projects-directory'>
      <div>Projects Directory:</div>
      
      <div className='projects-items-list'>
      
        {
          loading ? <Box sx={{ display: 'flex' }} className="loading-div"><CircularProgress color="success" /></Box> :
        currentProjects.map(({id, ...otherProjectProps }) => (
                        <Projectitem key={id} callingId={id} {...otherProjectProps} />
                    ))
        }
        {/* <Card sx={{ minWidth: 275,width:280,ml:1,mb:1,mt:1 }} className="project-item"> */}
        <FullScreenDialog />
        {/* </Card> */}

      </div>

    </div>
    )
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentProjects: selectCurrentProjects,
  // currentUserId:selectCurrentUserId
});

const mapDispatchToProps = dispatch => ({
  setProjectsData: projects => dispatch(setProjectsData(projects))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsDirectoryHooks);