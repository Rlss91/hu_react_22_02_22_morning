import { createSlice } from "@reduxjs/toolkit";

/*
    create variables that we want redux to store for us
*/
const initialAuthState = {
  loggedIn: false,
};

/*
    this is a redux toolkit pattern to
    create the state for redux its self
    create actions/reducers to manipulate the state
*/
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

//export the actions so we can modify the variables from other components
export const authActions = authSlice.actions;

export default authSlice.reducer;