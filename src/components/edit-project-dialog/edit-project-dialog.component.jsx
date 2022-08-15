import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import { Drawer,useMantineTheme, NumberInput, TextInput, ButtonText,Box,Group,Text,Button,Center,Select } from '@mantine/core';
import { DatePicker} from '@mantine/dates';
import { RichTextEditor } from '@mantine/rte';
import { setProjectEditing } from '../../redux/projects/projects.actions';
import { selectEditingProject, selectSelectedProject } from '../../redux/projects/projects.selectors';
import { createStructuredSelector } from 'reselect';
import { showNotification } from '@mantine/notifications';
import { editProject } from '../../redux/projects/projects.utils';
import './edit-project-dialog.styles.css';

function EditProjectDialog({setProjectEditing,editingProject,selectedProject}){
  const [editOpened, setEditOpened] = useState(false);
  const theme = useMantineTheme();
  const [editProjectTitle, setEditProjectTitle] = useState(' ');
  const [editOverview, setEditOverview] = useState(' ');
  const [editStartDate, setEditStartDate] = useState(' ');
  const [editEndDate, setEditEndDate] = useState(' ');
  const [editStatus, setEditStatus] = useState(' ');
  const [editPriority, setEditPriority] = useState(' ');
  useEffect(()=>{
    if(editingProject){
      setEditOpened(true);
      setEditProjectTitle(selectedProject.projectTitle);
    setEditOverview(selectedProject.overview);
    setEditStartDate(selectedProject.startDate);
    setEditEndDate(selectedProject.endDate);
    setEditStatus(parseInt(selectedProject.status));
    setEditPriority(parseInt(selectedProject.priority));
    }
  },[editingProject]);


  const onSubmit=async ()=>{
    editProject(selectedProject.id,{
      editProjectTitle,
      editOverview,
      editStartDate,
      editEndDate,
      editStatus,
      editPriority,
      projectAuthor:selectedProject.projectAuthor
    });
    setProjectEditing(false);

    // resetValues();
  }
  const handleClose=()=>{
    setProjectEditing(false);
    setEditOpened(false)
  }
  const resetValues=()=>{
    setEditProjectTitle('');
    setEditOverview("");
    setEditStartDate('');
    setEditEndDate('');
    setEditStatus('');
    setEditPriority('');
    setEditOpened(false);
  }

  return (
    <>
    <Drawer
     id='project-edit-drawer'
     sx={{ 
      overflow:'auto'
      }}
     className='project-edit-drawerYellow'
      opened={editOpened}
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
          <Text weight={700}>Edit Project</Text>
      </Group>
    <form>
      <TextInput label="Project Name" mt="md" placeholder="Project Name" value={editProjectTitle} onChange={(event) => setEditProjectTitle(event.currentTarget.value)} />
    
      <Group position='center' mt="md">
        <RichTextEditor value={editOverview} onChange={(event) => setEditOverview(event)} stickyOffset={1} rows={400} required />
      </Group>

      <Group mt="md" position='apart'>
        <DatePicker placeholder="Pick Start Data" label="Start Date: " required  name="startDate" value={editStartDate}
        onChange={setEditStartDate} 
        sx={{ width:"45%",minWidth:200 }} />
        <DatePicker placeholder="Pick End Data" label="End Date: " required name="endDate" value={editEndDate}
        onChange={setEditEndDate}
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
  editingProject: selectEditingProject,
  selectedProject: selectSelectedProject,
});

const mapDispatchToProps = dispatch => ({
  setProjectEditing: setting => dispatch(setProjectEditing(setting)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProjectDialog);