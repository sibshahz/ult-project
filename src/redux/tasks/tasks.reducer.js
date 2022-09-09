import { TasksActionTypes } from "./tasks.types";
import { addTask } from "./tasks.utils";

const INITIAL_STATE={
    currentTasks:[],
    selectedTask:[],
    editingTask:false
};

const tasksReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case TasksActionTypes.SET_TASKS_DATA:
            return{
                ...state,
                currentTasks:action.payload
            }
        case TasksActionTypes.SET_TASK_DATA:
            addTask(action.payload);
            return state;
        case TasksActionTypes.SET_TASK_EDITING:
        return{
            ...state,
            editingTask:action.payload
        }

        case TasksActionTypes.SET_SELECTED_TASK:
        return{
            ...state,
            selectedTask:action.payload
        }
        case TasksActionTypes.REMOVE_SELECTED_TASK:
        return{
            ...state,
            selectedTask:action.payload
        }
        default:
            return state;
    }
};

export default tasksReducer;