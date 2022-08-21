import React,{useState} from 'react';
import { connect } from 'react-redux';
import {IconTrash} from '@tabler/icons';
import {Table,TransferList} from '@mantine/core';
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
export const MembersList = () => {
  const [data,setData]=useState(initialValues);


    
  return (
    <div>
        

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

export default connect(mapStateToProps, mapDispatchToProps)(MembersList)