<<<<<<< HEAD

import { createSlice } from "@reduxjs/toolkit";


const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const storedRole = localStorage.getItem("role") || "";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: storedIsLoggedIn, 
    role: storedRole,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true"); 
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
    },
    changeRole(state, action) {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
=======

import { createSlice } from "@reduxjs/toolkit";


const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const storedRole = localStorage.getItem("role") || "";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: storedIsLoggedIn, 
    role: storedRole,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true"); 
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
    },
    changeRole(state, action) {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
>>>>>>> 77f0b7975a4ef4138d90afd297611dd1f7e1725e
