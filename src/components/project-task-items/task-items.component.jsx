import React from 'react';
import { ActionIcon,Card,Group,Menu,Image,Button,Text,Badge,Spoiler } from '@mantine/core';
import { IconDots, IconTrash,IconEdit,IconCheck } from '@tabler/icons';

const handleEdit=()=>{
  return;
}
const openDeleteModal=()=>{
  return;
}
function TaskItems(props) {

  return (
    <div>
      <Card shadow="sm" p="lg" radius="md" withBorder sx={{ marginTop:'16px',minWidth:600 }}>
  <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={300}>'End Date' - 'Start Date'</Text>
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
    
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Task Title</Text>
        <Text weight={300}>Assigned to: </Text>
      </Group>
      <Group position='apart' mt='md' mb="xs">
        <Badge color="green" variant="light">
        Status: Task Status
        </Badge>
        
        <Badge color="pink" variant="light">
        Priority: Task Priority
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
      <Spoiler maxHeight={20} showLabel="Show more" hideLabel="Hide">
      {/* <div dangerouslySetInnerHTML={{__html: <h1>Simple detail</h1>}} /> */}
      </Spoiler>
      </Text>


        

    </Card>
    </div>
  )
}

export default TaskItems;