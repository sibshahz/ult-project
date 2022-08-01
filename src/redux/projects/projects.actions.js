import { ProjectsActionTypes } from './projects.types';

export const setProjectData = project => ({
  type: ProjectsActionTypes.SET_PROJECT_DATA,
  payload: project
});

export const getProjectsData = projects => ({
  type: ProjectsActionTypes.GET_PROJECTS_DATA,
  payload:projects
});