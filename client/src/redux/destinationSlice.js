import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosInstance } from "../api/axios";
import { axiosInstance } from '../utilities/utiles.js';

// Initial state
const initialState = {
	destination: [],
	isUploading: false,
	success: false,
	error: null,
};

// Slice
const destinationSlice = createSlice({
	name: 'destination',
	initialState,
	reducers: {
		destinationStart: state => {
			state.error = false;
			isUploading = true;
			(state.destination = []), (success = false);
		},
		destinationSuccess: (state, action) => {
			state.error = false;
			state.destination = action.payload;
			isUploading = false;
			success = true;
		},
		destinationFailure: (state, action) => {
			state.error = action.payload;
			state.isUploading = false;
			success = false;
		},
	},
});

export const { destinationStart, destinationSuccess, destinationFailure } =
	destinationSlice.actions;
export const selectDestination = state => state.destination.destination;

export default destinationSlice.reducer;
