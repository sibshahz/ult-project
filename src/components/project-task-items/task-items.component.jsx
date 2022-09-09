import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ActionIcon,Card,Group,Menu,Image,Button,Text,Badge,Spoiler } from '@mantine/core';
import { IconDots, IconTrash,IconEdit,IconCheck } from '@tabler/icons';
import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { deleteTask } from '../../redux/tasks/tasks.utils';
import { selectEditingTask } from '../../redux/tasks/tasks.selectors';
import { setSelectedTask, setTaskEditing } from '../../redux/tasks/tasks.actions';


function TaskItems({taskId,taskTitle,overview,startDate,endDate,priority,status,setSelectedTask,setTaskEditing}) {
  
  async function handleDelete(callingId){
    await deleteTask(taskId);
          showNotification({
            title: taskTitle,
            message: 'Hey there, task delete successfully! 🤥',
            color:'green', title:taskTitle
          });
  }
  function handleEdit(){
    setTaskEditing(true);
    setSelectedTask({
      taskTitle,overview,startDate:startDate,endDate:endDate,status,priority,id:taskId
    });

  }
  const openDeleteModal = () =>
  openConfirmModal({
    title: `Delete ${taskTitle}`,
    centered: true,
    children: (
      <Text size="sm">
        Are you sure you want to delete task {taskTitle}? This action is destructive and you will have
        to contact support to restore your data.
      </Text>
    ),
    labels: { confirm: 'Delete task', cancel: "No don't delete it" },
    confirmProps: { color: 'red' },
    onCancel: () => showNotification({
                      title: 'Canceled',
                      message: 'Hey there, phew that was close! :)',
                      color:'gray', 
                    }),
    onConfirm: () => handleDelete(taskId),
  });
  return (
    <div>
      <Card shadow="sm" p="lg" radius="md" withBorder sx={{ marginTop:'16px',minWidth:600 }}>
  <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={300}>{startDate} - {endDate}</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={handleEdit} icon={<IconEdit size={14} />}>Edit</Menu.Item>
              <Menu.Item icon={<IconTrash size={14}  />} color="red" onClick={openDeleteModal}>
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Card.Section>
      {/* <Notification icon={<IconCheck size={18} />} color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification> */}
    
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{taskTitle}</Text>
        <Text weight={300}>Assigned to: </Text>
      </Group>
      <Group position='apart' mt='md' mb="xs">
        <Badge color="green" variant="light">
        Status: {status}
        </Badge>
        
        <Badge color="pink" variant="light">
        Priority: {priority}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
      <Spoiler maxHeight={20} showLabel="Show more" hideLabel="Hide">
        <div dangerouslySetInnerHTML={{__html: overview}} />
      </Spoiler>
      </Text>


        

    </Card>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  editingTask: selectEditingTask,
});

const mapDispatchToProps = dispatch => ({
  setSelectedTask: taskDetails => dispatch(setSelectedTask(taskDetails)),
  setTaskEditing: setting => dispatch(setTaskEditing(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskItems);