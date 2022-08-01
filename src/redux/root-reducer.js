import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import projectsReducer from './projects/projects.reducer';

import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'projectroot',
  storage,
//   whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  project: projectsReducer
});

export default persistReducer(persistConfig, rootReducer);