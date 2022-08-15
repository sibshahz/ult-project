import React,{useEffect, useState} from 'react';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, ButtonText,Box,Group,Text,Button,Center,Select } from '@mantine/core';
import { DatePicker} from '@mantine/dates';
import { RichTextEditor } from '@mantine/rte';
import { connect } from 'react-redux';
import { setProjectData, setSelectedProject } from '../../redux/projects/projects.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import { selectEditingProject, selectSelectedProject } from '../../redux/projects/projects.selectors';


function AddProject({setProjectData,currentUser,setOpened,selectedProject}) {

  const [projectTitle, setProjectTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  const handleDateStart=(event)=>{
    // console.log("START DATE BEFORE FORMATING IS: ", event);
    const start=new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit',year: 'numeric'}).format(startDate);
    setStartDate(start);
    // console.log("Start date is:", start);
  }
  const handleDateEnd=(event)=>{
  
    const end=new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit',year: 'numeric'}).format(endDate);
    setEndDate(end);
    // console.log("END DATE IS: ", end);
  }

  const onSubmit=async ()=>{
    await setProjectData({
      projectTitle,
      overview,
      startDate,
      endDate,
      status,
      priority,
      projectAuthor:currentUser.id});
     
      showNotification({
        title: projectTitle,
        message: 'added, successfully! :)',
        color:'green', icon:<IconCheck />,title:projectTitle
      });
      resetValues();
  }
  const resetValues=()=>{
    setProjectTitle('');
    setOverview("");
    setStartDate(new Date());
    setEndDate(new Date());
    setStatus('');
    setPriority('');
  }

  
  // useEffect(()=>{
  //   console.log("PROJECT TITLE IS: ", projectTitle);
  // },[projectTitle]);
// const handleChange=event =>{
//   console.log("EVENT IS: ",event);
//     const {value, name}=event.target;
//     setFormValues({...formValues,[name]: value});
// };

  return (
    <Center style={{ width: '100%',height:'auto' }} p="xs" >
    
    <Box m="lg" sx={{ width:'100%', maxWidth:'700px'}}>
    <Group position="center" mt="md">
          <Text weight={700}>Add New Project</Text>
      </Group>
    <form>
      <TextInput label="Project Name" mt="md" placeholder="Project Name" value={projectTitle} onChange={(event) => setProjectTitle(event.currentTarget.value)} />
    
      <Group position='center' mt="md">
        <RichTextEditor value={overview} onChange={(event) => setOverview(event)} stickyOffset={1} rows={400} required />
      </Group>

      <Group mt="md" position='apart'>
        <DatePicker placeholder="Pick Start Data" label="Start Date: " required  name="startDate" value={startDate}
        onChange={handleDateStart}   inputFormat="MM/DD/YYYY" 
        labelFormat="MM/DD/YYYY" 
        sx={{ width:"45%",minWidth:200 }} />
        <DatePicker placeholder="Pick End Data" label="End Date: " required name="endDate" value={endDate}
        onChange={handleDateEnd} labelFormat="MM/DD/YYYY" inputFormat="MM/DD/YYYY"
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
      
      <Button mt="sm" onClick={resetValues}>
        Cancel
      </Button>
      <Button mt="sm" ml="sm" onClick={onSubmit}>
        Save
      </Button>
    </form>
    </Box>
    </Center>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  selectedProject:selectSelectedProject
});

const mapDispatchToProps = dispatch => ({
  setProjectData: projectDetails => dispatch(setProjectData(projectDetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProject);