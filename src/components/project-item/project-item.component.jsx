import React,{useEffect} from 'react';
import { IconDots, IconTrash,IconEdit,IconCheck } from '@tabler/icons';
import { openConfirmModal } from '@mantine/modals';
import { deleteProject } from '../../redux/projects/projects.utils';
import { showNotification } from '@mantine/notifications';
import { Link } from 'react-router-dom';

import { Card, Image, Text, Badge, Button, Group,Spoiler,Menu,ActionIcon,Notification } from '@mantine/core';
import { connect } from 'react-redux/es/exports';
import { createStructuredSelector } from 'reselect';
import { setProjectEditing, setSelectedProject } from '../../redux/projects/projects.actions';
import { selectEditingProject, selectSelectedProject } from '../../redux/projects/projects.selectors';
import { encodeDateInString } from '../functions.utils';

function Projectitem({endDate,priority,overview,projectAuthor,team,projectTitle,status,startDate,id,callingId,editingProject,selectedProject,setProjectEditing,setSelectedProject}) {
 
// const start=new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit',year: 'numeric'}).format(startDate);
// const end=new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit',year: 'numeric'}).format(endDate);
 
async function handleDelete(callingId){

    await deleteProject(callingId);
          showNotification({
            title: projectTitle,
            message: 'Hey there, project delete successfully! 🤥',
            color:'green', title:projectTitle
          });
  }
  function handleEdit(){
    setProjectEditing(true);
    setSelectedProject({
      projectTitle,projectAuthor,overview,startDate:startDate,endDate:endDate,status,priority,id:callingId
    });
  }
  const handleTimelineClick=()=>{
    setSelectedProject({
      projectTitle,projectAuthor,overview,startDate:startDate,endDate:endDate,status,priority,id:callingId
    });
  }

  const openDeleteModal = () =>
  openConfirmModal({
    title: `Delete ${projectTitle}`,
    centered: true,
    children: (
      <Text size="sm">
        Are you sure you want to delete project {projectTitle}? This action is destructive and you will have
        to contact support to restore your data.
      </Text>
    ),
    labels: { confirm: 'Delete project', cancel: "No don't delete it" },
    confirmProps: { color: 'red' },
    onCancel: () => showNotification({
                      title: 'Canceled',
                      message: 'Hey there, phew that was close! :)',
                      color:'gray', 
                    }),
    onConfirm: () => handleDelete(callingId),
  });
  
return(
    <>
  <Card shadow="sm" p="lg" radius="md" withBorder sx={{ margin:8,minWidth:320,maxWidth:320 }}>
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
              <Menu.Item onClick={handleEdit} icon={<IconEdit size={14} />}>Quick Edit</Menu.Item>
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
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{projectTitle}</Text>
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

      <Link to="/dashboard/project/">
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={handleTimelineClick}>
        View Timeline
        </Button>
      </Link>

    </Card>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  editingProject: selectEditingProject
});

const mapDispatchToProps = dispatch => ({
  setSelectedProject: projectDetails => dispatch(setSelectedProject(projectDetails)),
  setProjectEditing: setting => dispatch(setProjectEditing(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projectitem);
