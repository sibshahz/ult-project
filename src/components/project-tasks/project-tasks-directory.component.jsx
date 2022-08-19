import React from 'react'
import { connect } from 'react-redux'
import TaskItems from '../project-task-items/task-items.component'

export const ProjectTasksDirectory = (props) => {
  return (
    <>
    <div>Tasks Directory:</div>
    <TaskItems />
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTasksDirectory)