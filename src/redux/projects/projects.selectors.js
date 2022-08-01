import { createSelector } from 'reselect';

const selectProjects = state => state.project;

export const selectCurrentProjects = createSelector(
  [selectProjects],
  project => project.currentProjects
);