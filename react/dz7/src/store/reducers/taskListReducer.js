import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from '../../data/tasks'; 
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    return tasksData;
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default tasksSlice.reducer;