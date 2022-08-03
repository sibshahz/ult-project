import { createSelector } from 'reselect';

const selectProjects = state => state.projects;

export const selectCurrentProjects = createSelector(
  [selectProjects],
  projects => projects.currentProjects
);