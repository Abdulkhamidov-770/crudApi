import { createSlice } from "@reduxjs/toolkit";

const signIn = createSlice({
  name: "signIn",
  initialState: {
    user:{
        username: "",
        password: "",
      },
      token:''
  },
  reducers: {
      setSignInSlice: (state, action) => {
          // console.log('state', state);
        state.user = action.payload;
        console.log('state user', state.user);
        return state.user;
      },
      setToken: (state, action) => {
          // console.log('state', state);
        state.token = action.payload;
        console.log('state token', state.token);
        return state.token;
      },
},
});

export const { setSignInSlice, setToken } = signIn.actions;
export default signIn.reducer;
