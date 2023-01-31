import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';
import menuReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menu: menuReducer,
  },
})
