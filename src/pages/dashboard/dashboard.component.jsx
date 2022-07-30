import React from "react";
import FullScreenDialog from "../../components/project-dialog-box/full-screen-dialog.component";
import { ProjectsDirectory } from "../../components/projects-directory/projects-directory.component";
class DashboardPage extends React.Component {
  
  render(){
    return (
      <>
        <h1>Dashboard</h1>
        <ProjectsDirectory />
        
      </>
     );
  }
}
export default DashboardPage;
