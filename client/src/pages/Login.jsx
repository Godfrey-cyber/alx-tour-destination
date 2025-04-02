import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../utilities/apiCalls.js"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user, loading, error, accessToken } = useSelector((state) => state.auth);
	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const handleLogin = (event) => {
	    event.preventDefault();
	    dispatch(loginUser(email, password));
	  };
	return (
		<div className="flex flex-col bg-white h-screen justify-center items-center w-full px-5 md:px-10 lg:px-20">
			<div className="flex flex-col space-y-6 h-92 w-1/3">
				<div className="flex flex-col space-y-3">
					<p className="text-lg font-bold text-amber-400">Login and start booking</p>
					<p className="text-sm font-normal text-gray-600">You can Login using your Pacific.com account to access our services.</p>
				</div>
				<div className="flex flex-col space-y-6">
					<form onSubmit={handleLogin} action="" className="flex flex-col space-y-2">
						<label htmlFor="email">Email</label>
						{/*<span className="">*/}
							<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="Email" id="" placeholder="Email" className="border border-gray-400 outline-none hover:outline-none w-full h-9 px-3 py-1 text-gray-500 text-sm" />
						{/*</span>*/}
						<label htmlFor="password">Password</label>
						<input type="password" value={password} onChange={(event) => setPasword(event.target.value)} name="Password" id="" placeholder="Password" className="border border-gray-400 outline-none hover:outline-none w-full h-9 px-3 py-1 text-gray-500 text-sm" />
						<button type="submit" disabled={loading} className="bg-orange-400 text-white rounded-md text-xs font-semibold w-full h-12 px-3 py-2 cursor-pointer">{loading ? 'Logging in...' : 'SUBMIT'}</button>
						<div className="flex items-center text-xs text-gray-400 justify-self-center">Don't have an account?<span onClick={() => navigate('/signup')} className="cursor-pointer text-orange-400 hover:font-semibold transition-all delay-200 ml-2">SignUp here</span></div>
					</form>
					<div className="flex space-x-2 items-center my-4 w-full justify-center">
						<span className="h-0.25 bg-gray-300 w-1/5"></span>
							<p className="text-xs font-normal text-gray-600">or use one of these options</p>
						<span className="h-0.25 bg-gray-300 w-1/5"></span>
					</div>			
				</div>
			</div>
		</div>
	)
}

export default Login