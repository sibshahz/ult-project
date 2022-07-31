import React from "react";
import LikeDislike from "../../components/codility-problems/like-dislike";
import LoginForm from "../../components/codility-problems/login-form";
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
