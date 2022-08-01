import { ProjectsActionTypes } from './projects.types';
import { addProject} from './projects.utils';

const INITIAL_STATE = {
  currentProjects: []
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.SET_PROJECT_DATA:
      // return {
      //   ...state,
      //   currentProjects: currentProjects
      // };
      addProject(action.payload);
      return state;
    case ProjectsActionTypes.GET_PROJECTS_DATA:
      return{
        ...state,
        currentProjects:action.payload
      }
    default:
      return state;
  }
};

export default projectsReducer;