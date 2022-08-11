import { ProjectsActionTypes } from './projects.types';
import { addProject} from './projects.utils';

const INITIAL_STATE = {
  currentProjects: [],
  editingProject:false,
  selectedProject:false
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
    case ProjectsActionTypes.SET_PROJECTS_DATA:
      return{
        ...state,
        currentProjects:action.payload
    }
    case ProjectsActionTypes.SET_PROJECT_EDITING:
      return{
        ...state,
        editingProject:action.payload
    }
    case ProjectsActionTypes.SET_SELECTED_PROJECT:
      return{
        ...state,
        selectedProject:action.payload
    }
    case ProjectsActionTypes.REMOVE_SELECTED_PROJECT:
      return{
        ...state,
        selectedProject:action.payload
    }
    default:
      return state;
  }
};

export default projectsReducer;