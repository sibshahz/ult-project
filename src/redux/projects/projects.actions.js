import { ProjectsActionTypes } from './projects.types';

export const setProjectData = project => ({
  type: ProjectsActionTypes.SET_PROJECT_DATA,
  payload: project
});

export const setProjectsData = projects => ({
  type: ProjectsActionTypes.SET_PROJECTS_DATA,
  payload:projects
});

export const setProjectEditing = project => ({
  type: ProjectsActionTypes.SET_PROJECT_EDITING,
  payload:project
});

export const setSelectedProject = project => ({
  type: ProjectsActionTypes.SET_SELECTED_PROJECT,
  payload:project
});

export const removeSelectedProject = project => ({
  type: ProjectsActionTypes.REMOVE_SELECTED_PROJECT,
  payload:project
});