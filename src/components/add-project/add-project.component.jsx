import React,{useEffect, useState} from 'react';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, ButtonText,Box,Group,Text,Button,Center,Select } from '@mantine/core';
import { DatePicker} from '@mantine/dates';
import { RichTextEditor } from '@mantine/rte';
import { connect } from 'react-redux';
import { setProjectData } from '../../redux/projects/projects.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';


function AddProject({setProjectData,currentUser,setOpened}) {
  const initialValue =
  '<p>Add complete detail of your <b>project</b> here, you can also add, images, link to videos and embed code snippets</p>';
  const [projectTitle, setProjectTitle] = useState('');
  const [overview, setOverview] = useState(initialValue);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

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
    setStartDate('');
    setEndDate('');
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
        <RichTextEditor value={overview} onChange={setOverview} stickyOffset={1} rows={400} required />
      </Group>

      <Group mt="md" position='apart'>
        <DatePicker placeholder="Pick Start Data" label="Start Date: " required  name="startDate" value={startDate}
        onChange={setStartDate} 
        sx={{ width:"45%",minWidth:200 }} />
        <DatePicker placeholder="Pick End Data" label="End Date: " required name="endDate" value={endDate}
        onChange={setEndDate}
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setProjectData: projectDetails => dispatch(setProjectData(projectDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProject);