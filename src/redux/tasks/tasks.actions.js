import { TasksActionTypes } from './tasks.types';

export const setTaskData = task => ({
  type: TasksActionTypes.SET_TASK_DATA,
  payload: task
});

export const setTasksData = tasks => ({
  type: TasksActionTypes.SET_TASKS_DATA,
  payload:tasks
});

export const setTaskEditing = task => ({
  type: TasksActionTypes.SET_TASK_EDITING,
  payload:task
});

export const setSelectedTask = task => ({
  type: TasksActionTypes.SET_SELECTED_TASK,
  payload:task
});

export const removeSelectedTask = task => ({
  type: TasksActionTypes.REMOVE_SELECTED_TASK,
  payload:task
});