import { createSlice } from '@reduxjs/toolkit';

const tareasSlice = createSlice({
  name: 'tareas',
  initialState: [],
  reducers: {
    agregarTarea: (state, action) => {
      state.push(action.payload);
    },
    eliminarTarea: (state, action) => {
      return state.filter((tarea) => tarea.id !== action.payload);
    },
  },
});

export const { agregarTarea, eliminarTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
