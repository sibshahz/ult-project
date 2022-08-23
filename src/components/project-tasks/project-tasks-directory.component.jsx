import React,{useEffect} from 'react';
import { connect } from 'react-redux/es/exports';
import TaskItems from '../project-task-items/task-items.component';
import {useNavigate} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectSelectedProject,selectEditingProject } from '../../redux/projects/projects.selectors';
import { setProjectEditing, setSelectedProject } from '../../redux/projects/projects.actions';
import { Accordion, Text } from '@mantine/core';

function ProjectTasksDirectory  ({selectedProject}) {
  const {projectTitle,overview,startDate,endDate,status,priority,id}=selectedProject;
  // const navigate = useNavigate();  
  useEffect(()=>{

    // navigate(`/project/id: ${id}`);
  
  },[]);

  return (
    <>
      <Accordion mb="lg">
        <Accordion.Item value="projectTitle">
          <Accordion.Control><Text weight={500}>Project: {projectTitle}</Text></Accordion.Control>
          <Accordion.Panel>
            <Text>Start Date: {startDate}</Text>
            <Text>End Date: {endDate}</Text>
            <Text>Status: {status}</Text>
            <Text>Priority: {priority}</Text>
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