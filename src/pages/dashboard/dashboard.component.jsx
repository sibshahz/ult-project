import React from "react";
import ProjectForm from "../../components/project-form/project-form.component";
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
