import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { axiosInstance } from "../api/axios";
import { axiosInstance } from "../utilities/apiCalls.js"

// Initial state
const initialState = {
    user: null,
    accessToken: null,
    loading: false,
    error: null,
};

// Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
