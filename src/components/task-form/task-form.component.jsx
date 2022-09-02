import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Box,Center,Group,Text,TextInput,Select,Button} from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import { DatePicker} from '@mantine/dates';
import { selectEditingTask } from '../../redux/tasks/tasks.selectors';
import { selectSelectedProject } from '../../redux/projects/projects.selectors';
import {setTaskData, setTaskEditing} from '../../redux/tasks/tasks.actions';
import { showNotification } from '@mantine/notifications';
import {IconCheck} from "@tabler/icons"; 
import { encodeDateInString } from '../functions.utils';

function TaskForm({setTaskOpened,selectedProject,setTaskData}) {
    const [taskTitle, setTaskTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const handleDateStart=(event)=>{
      // console.log("START DATE BEFORE FORMATING IS: ", event);
      // const date=encodeDateInString(event);
      setStartDate(event);
      // console.log("Start date is:", start);
    }
    const handleDateEnd=(event)=>{
      // const date=encodeDateInString(event);
      setEndDate(event);
      // console.log("END DATE IS: ", end);
    }
    const onSubmit=async ()=>{
      setTaskData({
        taskTitle,
        overview,
        startDate:encodeDateInString(startDate),
        endDate:encodeDateInString(endDate),
        status,
        priority,
        projectRefId:selectedProject.id});
       
        showNotification({
          title: taskTitle,
          message: 'added, successfully! :)',
          color:'green', icon:<IconCheck />,title:taskTitle
        });
    }
  return (
    <Box m="lg" sx={{ width:'100%',overflow:'auto' }}>
    <Center p="xs" >  
    <form>
      <TextInput label="Task Name" mt="md" placeholder="Task Name" value={taskTitle} onChange={(event) => setTaskTitle(event.currentTarget.value)} />
    
      <Group position='center' mt="md"> 
        <RichTextEditor value={overview} onChange={(event) => setOverview(event)} stickyOffset={1} rows={400} required />
      </Group>

      <Group mt="md" position='apart'>
        <DatePicker placeholder="Pick Start Data" label="Start Date: " required  name="startDate" value={startDate}
        onChange={handleDateStart}   inputFormat="DD/MM/YYYY" 
        labelFormat="DD/MM/YYYY" 
        sx={{ width:"45%",minWidth:200 }} />
        <DatePicker placeholder="Pick End Data" label="End Date: " required name="endDate" value={endDate}
        onChange={handleDateEnd} labelFormat="DD/MM/YYYY" inputFormat="DD/MM/YYYY"
        sx={{ width:"45%",minWidth:200 }} />
      </Group>

      <Group mt="md" position='apart'>
        <Select value={status} onChange={setStatus} placeholder="Status of the project" name="status" label="Status"
        
        sx={{ width:"45%",minWidth:200 }}
        data={[
          { value: 1, label: 'Starting' },
          { value: 2, label: 'In Progress' },
          { value: 3, label: 'Completed' },
          { value: 4, label: 'Overdue' },
        ]} 
         />
        <Select value={priority} onChange={setPriority} name="priority"
        placeholder="Priority of the project" label="Priority"
        sx={{ width:"45%",minWidth:200 }}
        
        data={[
          { value: 1, label: 'Yellow' },
          { value: 2, label: 'Green' },
          { value: 3, label: 'Blue' },
          { value: 4, label: 'Red' },
        ]} 
        />
      </Group>
      
      <Button mt="sm" onClick={() => setTaskOpened(false)}>
        Cancel
      </Button>
      <Button mt="sm" ml="sm" onClick={onSubmit}>
        Save
      </Button>
    </form>
    </Center>
    </Box>

    )

}

const mapStateToProps = createStructuredSelector({
  editingTask: selectEditingTask,
  selectedProject: selectSelectedProject
});

const mapDispatchToProps = dispatch => ({
  setTaskEditing: setting => dispatch(setTaskEditing(setting)),
  setTaskData: data => dispatch(setTaskData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);