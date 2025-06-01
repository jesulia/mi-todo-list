// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';
import goalReducer from '../features/goals/goalSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    goals: goalReducer
  }
});

export default store;
