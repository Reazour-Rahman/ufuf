// third-party

import { combineReducers } from 'redux';

// project import
// import menuSlice from 'features/menu/menuSlice';
import languageMenuSlice from '../features/languageMenuSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({  language: languageMenuSlice  });

export default reducers;