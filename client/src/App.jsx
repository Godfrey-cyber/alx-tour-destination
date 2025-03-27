import React, { useState } from 'react'
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
import { lazy, Suspense } from "react";

// const Login = lazy(() => import("./pages/Login.jsx"));
// const SignUp = lazy(() => import("./pages/SignUp.jsx"));
// const Home = lazy(() => import("./pages/Home.jsx"));

function App() {

    return (
        <section className="min-h-screen font-['Montserrat'] scroll-smooth w-screen overflow-x-hidden">
            <ToastContainer />
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default App
