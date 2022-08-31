import React,{useEffect} from 'react';
import { connect } from 'react-redux/es/exports';
import TaskItems from '../project-task-items/task-items.component';
import {useNavigate} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectSelectedProject,selectEditingProject } from '../../redux/projects/projects.selectors';
import { setProjectEditing, setSelectedProject } from '../../redux/projects/projects.actions';
import { Accordion, Text,Badge,Title,Card } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
function ProjectTasksDirectory  ({selectedProject}) {
  const {projectTitle,overview,startDate,endDate,status,priority,id}=selectedProject;
  // const navigate = useNavigate();  
  useEffect(()=>{

  
  },[]);

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
    <TaskItems />
    <Card className="add-project-box" onClick={() => console.log("OPEN SHAHZ ADD TASK")} shadow="sm" p="lg" radius="md" withBorder={true} 
      sx={{ marginTop:'16px',minWidth:600,textAlign:'center', minHeight:180,
      display:'flex', alignItems:'center',justifyContent:'center'}}>
    <IconPlus>Add new project</IconPlus>
    </Card>
    </>
  )
}



const mapStateToProps = createStructuredSelector({
  editingProject: selectEditingProject,
  selectedProject: selectSelectedProject,
});

const mapDispatchToProps = dispatch => ({
  setProjectEditing: setting => dispatch(setProjectEditing(setting)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectTasksDirectory);