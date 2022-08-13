import { Loader } from "@mantine/core";
import React,{lazy,Suspense} from "react";
import ProjectForm from "../../components/project-form/project-form.component";

const ProjectsDirectory = lazy(() => import('../../components/projects-directory/projects-directory.component'));
class DashboardPage extends React.Component {
  
  render(){
    return (
      <>
        {/* <ProjectsDirectory /> */}
        <Suspense fallback={<Loader sx={{ position:'absolute',width:"10%",height:"10%",top:"45%",left:"45%" }} />}>
          <ProjectsDirectory />
        </Suspense>

        
      </>
     );
  }
}
export default DashboardPage;
