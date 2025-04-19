import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Booking from './pages/Booking.jsx';
import Destination from './pages/Destination.jsx';
// import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './redux/authSlice.js';
import { axiosInstance } from './utilities/utiles.js';

function App() {
	const dispatch = useDispatch();
	const { user, loading, error, accessToken, isAuthenticated } = useSelector(
		state => state.auth
	);

	useEffect(() => {
		// On initial load, check if the user is authenticated
		const refreshToken = async () => {
			try {
				const response = await axiosInstance.get('/auth/refresh'); // Endpoint to fetch the logged-in user
				dispatch(loginSuccess(response.data)); // Dispatch user data to Redux store
			} catch (error) {
				console.log('User not authenticated', error);
			}
		};
		refreshToken();
	}, [dispatch, isAuthenticated]);

	console.log(user);

	return (
		<section className="min-h-screen font-['Montserrat'] scroll-smooth w-full overflow-x-hidden">
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/destination" element={<Destination />} />
					{/*<Route path="/home" element={<Home /> } />*/}
					<Route
						path="/home"
						element={
							accessToken ? <Home /> : <Navigate to="/login" />
						}
					/>
					<Route
						path="/login"
						element={
							accessToken ? <Navigate to="/home" /> : <Login />
						}
					/>
					<Route
						path="/signup"
						element={
							accessToken ? <Navigate to="/home" /> : <SignUp />
						}
					/>
					{/*<Route path="/booking" element={ <Booking /> } />*/}
					<Route
						path="/booking"
						element={
							accessToken ? <Booking /> : <Navigate to="/login" />
						}
					/>
				</Routes>
			</BrowserRouter>
		</section>
	);
}

export default App;
