import React,{useState} from 'react';
import {Box,Center,Group,Text,TextInput,Select,Button} from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import { DatePicker} from '@mantine/dates';

function TaskForm({setTaskOpened}) {
    const [projectTitle, setProjectTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    function handleDateStart(){
        return;
    }
    function handleDateEnd(){
        return;
    }
  return (
    <Box m="lg" sx={{ width:'100%',overflow:'auto' }}>
    <Center p="xs" >
    
    <form>
      <TextInput label="Task Name" mt="md" placeholder="Task Name" value={projectTitle} onChange={(event) => setProjectTitle(event.currentTarget.value)} />
    
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
      <Button mt="sm" ml="sm" onClick={() => setTaskOpened(false)}>
        Save
      </Button>
    </form>
    </Center>
    </Box>

    )

}

export default TaskForm;