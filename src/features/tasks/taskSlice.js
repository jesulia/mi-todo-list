// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []  // Aquí se almacenarán las tareas
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Se espera que action.payload sea un objeto con los datos de la tarea
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      // Se espera que action.payload sea el id de la tarea a eliminar
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setTasks: (state, action) => {
      // Reemplaza el estado completo de tareas (por ejemplo, al cargarlas desde el backend)
      state.tasks = action.payload;
    }
  }
});

export const { addTask, removeTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
