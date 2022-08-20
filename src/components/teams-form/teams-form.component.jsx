import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Divider, Input, TransferList,TransferListData,Button } from '@mantine/core';
import {IconAt} from '@tabler/icons';

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

export const TeamsForm = (props) => {
  const [data,setData]=useState(initialValues);
  return (
    <div>
        <Input
            my="lg"
            mb="0"
            icon={<IconAt />}
            placeholder="Enter email to search potential team members"
        />
        <Button my="sm">Request</Button>        <Button my="sm" disabled>Invite User</Button>

        <Divider my="lg" variant="dotted" />

        <TransferList
            value={data}
            onChange={setData}
            searchPlaceholder="Search..."
            nothingFound="Nothing here"
        />
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsForm)