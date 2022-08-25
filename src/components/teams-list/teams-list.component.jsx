import React,{useState} from 'react';
import { connect } from 'react-redux';
import {IconTrash,IconEdit} from '@tabler/icons';
import {Table,TransferList,Text,Box,TextInput,Grid,Button} from '@mantine/core';

const initialValues = [
  [
    { value: 'react', label: 'Shahid', group: 'Engineer' },
    { value: 'ng', label: 'Zubair', group: 'Developer' },
    { value: 'next', label: 'Rio', group: 'Dev Ops' },
    { value: 'jq', label: 'John', group: 'Engineer' },
    { value: 'sv', label: 'Dorrie', group: 'Engineer' },
    { value: 'dj', label: 'Buttercup', group: 'Designer' },
    { value: 'fl', label: 'Wonderwoman', group: 'UI Designer' },
  ],
  [
      { value: 'next', label: 'Rio', group: 'Dev Ops' },
      { value: 'jq', label: 'John', group: 'Engineer' },
      { value: 'sv', label: 'Dorrie', group: 'Engineer' },
  ],
];
export const TeamsList = () => {
  const [data,setData]=useState(initialValues);
  const elements = [
    { id:1,team : 'Developer Team', members: 5, role: 'engineering'},
    { id:2,team: 'QA Team', members:4, role: 'quality'},
    { id:3,team: 'John Designer Team', members:7, role: 'designing'},
    { id:4,team: 'Testing Team', members:2, role: 'testing'},
  ];
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.team}</td>
      <td>{element.members}</td>
      <td>{element.role}</td>
      <td><Button mr="xs" variant='outline'><IconEdit /></Button><Button variant='outline'><IconTrash /></Button></td>
    </tr>
  ));

    
  return (
    <div>
      <Text>Teams: </Text>
      <Box sx={{ 
        maxHeight:400,
        overflow:'auto',
       }}>
      <Table highlightOnHover my="lg" striped>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Box>
      
      <Text>Create Team:</Text>
        <TransferList
            value={data}
            onChange={setData}
            searchPlaceholder="Search..."
            nothingFound="Nothing here"
        />
        <Grid>
          <Grid.Col span={6}></Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              mt="xs"
              placeholder="Team name"
              label="Team name"
              withAsterisk
            />

          <TextInput
              mt="xs"
              placeholder="Team role"
              label="Team role"
              withAsterisk
            />
           <Button mt="xs" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Create Team</Button>
          </Grid.Col>
        </Grid>
        
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList)