// third-party

import { combineReducers } from "redux";

// project import
// import menuSlice from 'features/menu/menuSlice';
import languageMenuSlice from "../features/languageMenuSlice";
import menuSlice from "../features/menu/menuSlice";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu: menuSlice,
  language: languageMenuSlice,
});

export default reducers;
