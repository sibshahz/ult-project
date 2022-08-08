import React from "react";
import ProjectForm from "../../components/project-form/project-form.component";
import HooksProjectsDirectoryComponent from "../../components/projects-directory/hooks-projects-directory.component";
import ProjectsDirectory from "../../components/projects-directory/projects-directory.component";
class DashboardPage extends React.Component {
  
  render(){
    return (
      <>
        {/* <ProjectsDirectory /> */}
       <HooksProjectsDirectoryComponent />
        
      </>
     );
  }
}
export default DashboardPage;
