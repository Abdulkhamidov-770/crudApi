import { createSlice } from "@reduxjs/toolkit";

const task = createSlice({
  name: "task",
  initialState: {
    id: 0,
    number: 0,
    title: "",
    description: "",
    status: 0,
  },
  reducers: {
    setTaskSlice: (state, action) => {
        // console.log('state', state);
      state = action.payload;
      return state;
    },
  },
});

export const { setTaskSlice } = task.actions;
export default task.reducer;
