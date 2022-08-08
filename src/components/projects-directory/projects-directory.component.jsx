import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setProjectsData } from '../../redux/projects/projects.actions';
import { getProjectsList } from '../../redux/projects/projects.utils';
import { selectCurrentProjects } from '../../redux/projects/projects.selectors';
import FullScreenDialog from '../project-dialog-box/full-screen-dialog.component';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import Projectitem from '../project-item/project-item.component';
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



export class ProjectsDirectory extends React.Component {
  constructor() {
    super();
  }
  unsubscribeFromProjects = null;

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if ((this.props.currentUser.id) && (prevProps.currentUser === null)) {
      this.fetchData(this.props.currentUser.id);
    }else{
      return;
    }
  }
 
// componentWillUnmount(){
//   this.unsubscribeFromProjects();
// }

 async fetchData(id){
    try{
     
      const projectsRef = collection(db, "projects");
      // const q =await query(collection(db, "projects"));
  
      const q =await query(projectsRef,where("projectAuthor","id","==",+this.props.currentUser.id));
      // const q = query(projectsRef);
    
        this.unsubscribeFromProjects =onSnapshot(q, (querySnapshot) => {
          const projects = [];
          querySnapshot.forEach((doc) => {
              projects.push({...doc.data(),id:doc.id});
          });
          this.props.setProjectsData(projects);
        });
      }catch(e){
        console.error("Error is: ", e.message);
      }
  }
  handleClick(id,projectTitle){
    console.log("HANDLE CLIKC",id+" "+projectTitle);
  }
  render() {
    return (
    <div className='projects-directory'>
      <div className='projects-items-list'>
       
        {this.props.currentProjects.map(({id, ...otherProjectProps }) => (
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
)(ProjectsDirectory);