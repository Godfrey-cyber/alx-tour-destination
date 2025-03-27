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

// Login
export const loginUser = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/user-login", userData);
        return response.data; // { accessToken }
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Refresh Token
export const refreshToken = createAsyncThunk("auth/refresh", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/token-refresh");
        return response.data; // { accessToken }
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Logout
export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        await axiosInstance.post("/user-logout");
        return null;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.user = "Authenticated"; // Placeholder
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.accessToken = null;
                state.user = null;
        });
    },
});

export default authSlice.reducer;
