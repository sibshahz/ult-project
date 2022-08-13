
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import projectsReducer from './projects/projects.reducer';

import userReducer from './user/user.reducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  debug: true,
  storage, 
}

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer
});

export default persistReducer(persistConfig, rootReducer);