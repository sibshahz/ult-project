import React,{ useState } from 'react';
import { Drawer, Button, Group,Card,useMantineTheme } from '@mantine/core';
import {IconPlus} from "@tabler/icons";
import TaskForm from '../task-form/task-form.component';
import './task-dialog.styles.css';

function TaskDialog() {
    const [taskOpened, setTaskOpened] = useState(false);
    const theme = useMantineTheme();

    return (
      <>
        <Drawer
          id='task-add-drawer'
          className='task-add-drawer'
          overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
          opened={taskOpened}
          onClose={() => setTaskOpened(false)}
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

export default TaskDialog;