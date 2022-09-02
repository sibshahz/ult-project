import { createSelector } from 'reselect';

const selectTasks = state => state.tasks;
// const selectEditing = state => state.projects.editingProject;
// const selectProject = state => state.projects.selectedProject;

export const selectCurrentTasks = createSelector(
  [selectTasks],
  tasks => tasks.currentTasks
);

export const selectEditingTask = createSelector(
  [selectTasks],
  editingTask => editingTask.editingTask
);

export const selectSelectedTask = createSelector(
  [selectTasks],
  selected => selected.selectedTask
);