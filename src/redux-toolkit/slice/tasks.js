import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: [
    {
      id: 0,
      number: 0,
      title: "",
      description: "",
      status: 0,
    },
  ],
  reducers: {
    getTasksSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addTasksSlice: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      return state;
    },
    editTasksSlice: (state, action) => {
      state = state.map((x) =>
        x.id == action.payload.id ? action.payload : x
      );
      return state;
    },
    deleteTasksSlice: (state, action) => {
      state = state.filter((x) => x.id !== action.payload);
      return state;
    },
  },
});

export const {
  addTasksSlice,
  deleteTasksSlice,
  editTasksSlice,
  getTasksSlice,
} = tasks.actions;
export default tasks.reducer;
