import React,{useEffect} from 'react';
import { connect } from 'react-redux/es/exports';
import {
  where,
  query,
  onSnapshot,
  collection,
  doc,
  getDocs,
  orderBy,
} from "firebase/firestore";
import TaskItems from '../project-task-items/task-items.component';
import {useNavigate} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectSelectedProject,selectEditingProject, selectSelectedProjectId } from '../../redux/projects/projects.selectors';
import { setProjectEditing, setSelectedProject } from '../../redux/projects/projects.actions';
import { Accordion, Text,Badge,Title,Card } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import TaskDialog from '../task-dialog/task-dialog.component';
import { db} from "../../firebase/firebase";
import EditTaskDialog from '../edit-task-dialog/edit-task-dialog.component';
import { setTasksData } from '../../redux/tasks/tasks.actions';
import { selectCurrentTasks } from '../../redux/tasks/tasks.selectors';

function ProjectTasksDirectory  ({selectedProject,setTasksData,currentTasks}) {
  const {projectTitle,overview,startDate,endDate,status,priority,id}=selectedProject;
  // const navigate = useNavigate();  
  useEffect(() => {
    var unsubscribeFromProjects=undefined;
      
        try{
          var tasksRef = collection(db, "tasks");
          const projectRef = doc(db, "projects",id);

      
          // const q = query(tasksRef,where("projectRef","==",projectRef),orderBy("createdOn", "asc"));
        
          const q = query(tasksRef,where("projectRef","==",projectRef),orderBy("createdOn","asc"));
            unsubscribeFromProjects =onSnapshot(q, (querySnapshot) => {
              const tasks = [];
              querySnapshot.forEach((doc) => {
                tasks.push(
                    {
                      taskTitle:doc.data().taskTitle,
                      overview:doc.data().overview,
                      startDate:doc.data().startDate,
                      endDate:doc.data().endDate,
                      priority:doc.data().priority,
                      status:doc.data().status,
                      id:doc.id
                    });
              });
              setTasksData(tasks);
            });
       }catch(e){
        console.error("Error is: ", e.message);
       }
    }, []);

  return (
    <>
      <Title order={4}>Project: {projectTitle}</Title>
      <Accordion mb="lg" defaultValue="info">
        <Accordion.Item value="info">
          <Accordion.Control default><Text weight={500}>Info:</Text></Accordion.Control>
          <Accordion.Panel pb={16}>
            <div className='container' style={{ display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
            <div style={{ width: 200,marginBottom:8 }}>
              <Badge variant="dot" fullWidth>
                Started on: {startDate}
              </Badge>
            </div>
            <div style={{ width:200,marginBottom:8 }}>
              <Badge variant="dot" fullWidth>
                Ends on: {endDate}
              </Badge>
            </div>
            <div style={{ width:200,marginBottom:8 }}>
              <Badge variant="dot" fullWidth>
                Status: {status}
              </Badge>
            </div>
            <div style={{ width:200,marginBottom:8 }}>
              <Badge variant="dot" fullWidth>
                Priority: {priority}
              </Badge>
            </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="overview">
          <Accordion.Control>
            <Text weight={500}>Overview: </Text>
          </Accordion.Control>
          <Accordion.Panel>
          <div dangerouslySetInnerHTML={{__html: overview}} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    <div>Tasks Directory:</div>
    {
        currentTasks.map(({id, ...otherProjectProps }) => (
                        <TaskItems key={id} taskId={id} {...otherProjectProps} />
                    ))
                    }
    <TaskDialog />
    <EditTaskDialog />
    </>
  )
}



const mapStateToProps = createStructuredSelector({
  editingProject: selectEditingProject,
  selectedProject: selectSelectedProject,
  currentTasks: selectCurrentTasks,
});

const mapDispatchToProps = dispatch => ({
  setProjectEditing: setting => dispatch(setProjectEditing(setting)),
  setTasksData: tasks => dispatch(setTasksData(tasks)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectTasksDirectory);