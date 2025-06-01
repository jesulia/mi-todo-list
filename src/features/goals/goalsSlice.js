import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = "12345"; // Reemplaza con tu API key si usas una

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const res = await axios.get('http://localhost:3001/getGoals', {
    headers: { 'api-key': apiKey }
  });
  return res.data;
});

export const addGoal = createAsyncThunk('goals/addGoal', async (goal) => {
  const res = await axios.post('http://localhost:3001/addGoal', goal, {
    headers: { 'api-key': apiKey }
  });
  return res.data;
});

export const removeGoal = createAsyncThunk('goals/removeGoal', async (id) => {
  await axios.delete(`http://localhost:3001/removeGoal?id=${id}`, {
    headers: { 'api-key': apiKey }
  });
  return id;
});

const goalsSlice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => action.payload)
      .addCase(addGoal.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeGoal.fulfilled, (state, action) => {
        return state.filter(goal => goal.id !== action.payload);
      });
  },
});

export default goalsSlice.reducer;
