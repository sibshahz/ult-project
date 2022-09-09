import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import { Drawer,useMantineTheme, NumberInput, TextInput, ButtonText,Box,Group,Text,Button,Center,Select } from '@mantine/core';
import { createStructuredSelector } from 'reselect';
import { DatePicker} from '@mantine/dates';
import { RichTextEditor } from '@mantine/rte';
import { setTaskEditing } from '../../redux/tasks/tasks.actions';
import { selectEditingTask, selectSelectedTask } from '../../redux/tasks/tasks.selectors';
import { showNotification } from '@mantine/notifications';
import { editTask } from '../../redux/tasks/tasks.utils';
import { decodeDateFromString, encodeDateInString } from '../functions.utils';
import { IconCheck } from '@tabler/icons';

function EditTaskDialog({setTaskEditing,editingTask,selectedTask}){
  const [editTaskOpened, setTaskEditOpened] = useState(false);
  const theme = useMantineTheme();
  const [editProjectTitle, setEditProjectTitle] = useState(' ');
  const [editOverview, setEditOverview] = useState(' ');
  const [editStartDate, setEditStartDate] = useState(new Date());
  const [editEndDate, setEditEndDate] = useState(new Date());
  const [editStatus, setEditStatus] = useState(' ');
  const [editPriority, setEditPriority] = useState(' ');
  
  
  useEffect(()=>{
    if(editingTask){
      setTaskEditOpened(true);
      setEditProjectTitle(selectedTask.taskTitle);
    setEditOverview(selectedTask.overview);
    setEditStartDate(decodeDateFromString(selectedTask.startDate));
    setEditEndDate(decodeDateFromString(selectedTask.endDate));
    setEditStatus(parseInt(selectedTask.status));
    setEditPriority(parseInt(selectedTask.priority));
    }
  },[editingTask]);


  const onSubmit=async ()=>{
    editTask(selectedTask.id,{
      editProjectTitle,
      editOverview,
      editStartDate:encodeDateInString(editStartDate),
      editEndDate:encodeDateInString(editEndDate),
      editStatus,
      editPriority
    });
    showNotification({
      title: editProjectTitle,
      message: 'edited, successfully! :)',
      color:'green', icon:<IconCheck />,title:editProjectTitle
    });
    setTaskEditing(false);

    // resetValues();
  }
  const handleClose=()=>{
    setTaskEditing(false);
    setTaskEditOpened(false)
  }
  const resetValues=()=>{
    setEditProjectTitle('');
    setEditOverview("");
    setEditStartDate('');
    setEditEndDate('');
    setEditStatus('');
    setEditPriority('');
    setTaskEditOpened(false);
  }

  return (
    <>
    <Drawer
     id='task-edit-drawer'
     sx={{ 
      overflow:'auto'
      }}
     className='task-edit-drawer'
      opened={editTaskOpened}
      onClose={handleClose}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      position="bottom"
       size="100%"
       lockScroll={true}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      <Center style={{ width: '100%',height:'auto' }} p="xs" >
    
    <Box m="lg" sx={{ width:'100%', maxWidth:'700px'}}>
    <Group position="center" mt="md">
          <Text weight={700}>Edit Task</Text>
      </Group>
    <form>
      <TextInput label="Project Name" mt="md" placeholder="Project Name" value={editProjectTitle} onChange={(event) => setEditProjectTitle(event.currentTarget.value)} />
    
      <Group position='center' mt="md">
        <RichTextEditor value={editOverview} onChange={(event) => setEditOverview(event)} stickyOffset={1} rows={400} required />
      </Group>

      <Group mt="md" position='apart'>
        <DatePicker placeholder="Pick Start Data" label="Start Date: " required  name="startDate" value={editStartDate}
        onChange={setEditStartDate} labelFormat="DD/MM/YYYY" inputFormat="DD/MM/YYYY"
        sx={{ width:"45%",minWidth:200 }} />
        <DatePicker placeholder="Pick End Data" label="End Date: " required name="endDate" value={editEndDate}
        onChange={setEditEndDate} labelFormat="DD/MM/YYYY" inputFormat="DD/MM/YYYY"
        sx={{ width:"45%",minWidth:200 }} />
      </Group>

      <Group mt="md" position='apart'>
        <Select value={editStatus} onChange={setEditStatus} placeholder="Status of the project" name="status" label="Status"
        
        sx={{ width:"45%",minWidth:200 }}
        data={[
          { value: 1, label: 'Starting' },
          { value: 2, label: 'In Progress' },
          { value: 3, label: 'Completed' },
          { value: 4, label: 'Overdue' },
        ]} 
         />
        <Select value={editPriority} onChange={setEditPriority} name="priority"
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
        Update
      </Button>
    </form>
    </Box>
    </Center>
      
    </Drawer>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  editingTask: selectEditingTask,
  selectedTask: selectSelectedTask,
});

const mapDispatchToProps = dispatch => ({
  setTaskEditing: setting => dispatch(setTaskEditing(setting)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTaskDialog);