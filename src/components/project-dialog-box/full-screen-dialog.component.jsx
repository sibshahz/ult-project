import React,{useState,useEffect} from 'react';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import { setProjectData,setProjectEditing,setProjectsData, setSelectedProject } from '../../redux/projects/projects.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentProjects, selectEditingProject, selectSelectedProject } from '../../redux/projects/projects.selectors';
import { IconPlus } from '@tabler/icons';

import { Drawer, useMantineTheme,Card } from '@mantine/core';

import AddProject from '../add-project/add-project.component';
import './full-screen-dialog.styles.css';


function FullScreenDialog({setSelectedProject,selectedProject,setProjectData,setProjectsData,currentProjects,currentUser,editingProject,setProjectEditing}) {
  // const [open, setOpen] = React.useState(false);
  // const [projectDetails,setProjectDetails]=useState({projectTitle:'',startDate:'',endDate:'',overview:'',priority:'',status:'',team:''});
  // const {projectTitle,startDate,endDate,overview,priority,status,team}=projectDetails;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  
  function handleClose(){
    setSelectedProject(false);
    setOpened(!opened);
  }
  // const handleChange=event =>{
  // const {value, name}=event.target;
  //   setProjectDetails({...projectDetails,[name]: value});
  // };
  // const handleClickOpen = async () => {
    
  //   setOpen(true);

  // };

  // const handleClose = async () => {
  //   console.log("CURRENT USERT TO SAVE IS: ",currentUser.id);
  //   await setProjectData({...projectDetails,userId:currentUser.id});
  //   console.log("SAVE WAS CALLED");
  //   setOpen(false);
  // };

 

  return (
    <>
     <Drawer
     id='project-add-drawer'
     sx={{ 
      overflow:'auto'
      }}
     className='project-add-drawerYellow'
      opened={opened}
      onClose={handleClose}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      position="bottom"
       size="100%"
       lockScroll={true}
      overlayOpacity={0.55}
      overlayBlur={3}

      
    >
      
      <AddProject setOpened={setOpened} />
      
    </Drawer>
    <Card className="add-project-box" onClick={() => setOpened(true)} shadow="sm" p="lg" radius="md" withBorder={false} 
      sx={{ margin:8,minWidth:320,maxWidth:320,textAlign:'center', minHeight:410,
      display:'flex', alignItems:'center',justifyContent:'center'}}>
    <IconPlus>Add new project</IconPlus>
    </Card>

      
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentProjects: selectCurrentProjects,
  currentUser: selectCurrentUser,
  editingProject:selectEditingProject,
  selectedProject:selectSelectedProject
});

const mapDispatchToProps = dispatch => ({
  setProjectData: projectDetails => dispatch(setProjectData(projectDetails)),
  setProjectsData: projects => dispatch(setProjectsData(projects)),
  setProjectEditing: value => dispatch(setProjectEditing(value)),
  setSelectedProject: projectDetails => dispatch(setSelectedProject(projectDetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenDialog);
