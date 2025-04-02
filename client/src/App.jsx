import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Home from "./pages/Home.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import { lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "./redux/authSlice.js"
import { axiosInstance } from "./utilities/utiles.js"

// const Login = lazy(() => import("./pages/Login.jsx"));
// const SignUp = lazy(() => import("./pages/SignUp.jsx"));
// const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
    // On initial load, check if the user is authenticated
        const checkAuth = async () => {
            try {
                const response = await axiosInstance.get('/auth/me'); // Endpoint to fetch the logged-in user
                dispatch(loginSuccess(response.data)); // Dispatch user data to Redux store
            } catch (error) {
                console.log('User not authenticated', error);
            }
        };
        checkAuth();
    }, [dispatch]);

    return (
        <section className="min-h-screen font-['Montserrat'] scroll-smooth w-full overflow-x-hidden">
            <ToastContainer />
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default App
