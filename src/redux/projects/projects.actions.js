import { ProjectsActionTypes } from './projects.types';

export const setProjectData = project => ({
  type: ProjectsActionTypes.SET_PROJECT_DATA,
  payload: project
});

export const setProjectsData = projects => ({
  type: ProjectsActionTypes.SET_PROJECTS_DATA,
  payload:projects
});