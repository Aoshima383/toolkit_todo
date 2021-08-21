import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';

// Reducerを管理
export const store = configureStore({
  reducer: {
    task: taskReducer
  },
});
