import { createSelector } from 'reselect';

const selectProjects = state => state.projects;
// const selectEditing = state => state.projects.editingProject;
// const selectProject = state => state.projects.selectedProject;

export const selectCurrentProjects = createSelector(
  [selectProjects],
  projects => projects.currentProjects
);

export const selectEditingProject = createSelector(
  [selectProjects],
  editingProject => editingProject.editingProject
);

export const selectSelectedProject = createSelector(
  [selectProjects],
  selected => selected.selectedProject
);