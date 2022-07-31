import { ProjectsActionTypes } from './projects.types';

const INITIAL_STATE = {
  currentProjects: null
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.SET_PROJECT_DATA:
      return {
        ...state,
        currentProjects: action.payload
      };
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