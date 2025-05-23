import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import destinationReducer from './authSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		destination: destinationReducer,
	},
});
