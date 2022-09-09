import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Drawer, Button, Group,Card,useMantineTheme } from '@mantine/core';
import {IconPlus} from "@tabler/icons";
import TaskForm from '../task-form/task-form.component';
import './task-dialog.styles.css';
import { selectEditingTask } from '../../redux/tasks/tasks.selectors';
import { setTaskEditing } from '../../redux/tasks/tasks.actions';

const TaskDialog=({editingTask,setTaskEditing}) =>{
    const [taskOpened, setTaskOpened] = useState(false);
    const theme = useMantineTheme();
    // useEffect(()=>{
    //   if(editingTask){
    //     setTaskOpened(true);
    //   }else{
    //     setTaskOpened(false);
    //   }
    // },[editingTask]);
    return (
      <>
        <Drawer
          id='task-add-drawer'
          className='task-add-drawer'
          overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
          opened={taskOpened}
          onClose={() => setTaskOpened(false) }
          title=""
          padding="xl"
          position="bottom"
          size="100%"
          lockScroll={true}
          overlayOpacity={0.55}
          overlayBlur={3}
        >
            <TaskForm setTaskOpened={setTaskOpened} />
        </Drawer>
  
        <Card className="add-project-box" onClick={() => setTaskOpened(true)} shadow="sm" p="lg" radius="md" withBorder={true} 
            sx={{ marginTop:'16px',minWidth:600,textAlign:'center', minHeight:180,
            display:'flex', alignItems:'center',justifyContent:'center'}}>
            <IconPlus />
        </Card>
      </>
    );
}

const mapStateToProps = createStructuredSelector({
  editingTask:selectEditingTask,
});

const mapDispatchToProps = dispatch => ({
  setTaskEditing: editing => dispatch(setTaskEditing(editing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDialog);