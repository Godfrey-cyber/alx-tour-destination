import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosInstance } from "../api/axios";
import { axiosInstance } from '../utilities/utiles.js';

// Initial state
const initialState = {
	user: null,
	// accessToken: null,
	loading: false,
	error: null,
};

// Slice
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: state => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.loading = false;
			const { user, accessToken } = action.payload
			state.user = user;
			state.accessToken = accessToken;
		},
		loginFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		signUpStart: state => {
			state.loading = true;
		},
		signUpSuccess: (state, action) => {
			state.loading = false;
			state.user = action.payload;
		},
		signUpFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		logout: state => {
			state.user = null;
			state.accessToken = null;
			state.error = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, signUpStart, signUpSuccess, signUpFailure, logout } =
	authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.accessToken

export default authSlice.reducer;
