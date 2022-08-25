import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Divider, Input, TransferList,TransferListData,Button,Table,Box } from '@mantine/core';
import {IconAt,IconTrash} from '@tabler/icons';

export const TeamsForm = (props) => {
  const elements = [
    { id:1,name: 'Shahid', email: 'shahid5ssg@gmail.com', role: 'engineer'},
    { id:2,name: 'Roza', email: 'roza@gmail.com', role: 'designer'},
    { id:3,name: 'John Doe', email: 'johndo@gmail.com', role: 'developer'},
    { id:4,name: 'Aria Stark', email: 'ariastark@gmail.com', role: 'ux/ui'},
    { id:5,name: 'Bryan Fury', email: 'bryanfury@gmail.com', role: 'qa'},
  ];
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.role}</td>
      <td><Button variant='outline'><IconTrash /></Button></td>
    </tr>
  ));
  return (
    <div>
        <Input
            my="lg"
            mb="0"
            icon={<IconAt />}
            placeholder="Enter email to search potential team members"
        />
        <Button my="sm">Request</Button>        <Button my="sm" disabled>Invite User</Button>

        <Box sx={{ 
        maxHeight:400,
        overflow:'auto',
       }}>
        <Table highlightOnHover my="lg" striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        </Box>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsForm)