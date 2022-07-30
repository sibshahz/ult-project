import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullScreenDialog from '../project-dialog-box/full-screen-dialog.component';
import Projectitem from '../project-item/project-item.component';

export class ProjectsDirectory extends Component {
  render() {
    return (
    <div className='projects-directory'>
      <div>Projects Directory</div>
      <Projectitem />
      <FullScreenDialog />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsDirectory)