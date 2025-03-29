import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Login = () => {
	return (
		<div className="flex flex-col bg-white h-screen justify-center items-center w-full px-5 md:px-10 lg:px-20">
			<div className="flex flex-col space-y-6 h-92 w-1/3">
				<div className="flex flex-col space-y-3">
					<p className="text-lg font-bold text-amber-400">Sign in or create an account</p>
					<p className="text-sm font-normal text-gray-600">You can sign in using your Booking.com account to access our services.</p>
				</div>
				<div className="flex flex-col space-y-6">
					<form action="" className="flex flex-col space-y-4">
						<span className="border border-gray-400 outline-none hover:outline-none w-full h-9 px-3 py-1">
							<input type="text" name="First Name" id="" placeholder="First Name" className="border-none outline-none hover:outline-none w-full h-full text-gray-500 text-sm" />
						</span>
						<span className="border border-gray-400 outline-none hover:outline-none w-full h-9 px-3 py-1">
							<input type="text" name="Last Name" id="" placeholder="Last Name" className="border-none outline-none hover:outline-none w-full h-full text-gray-500 text-sm" />
						</span>
						<span className="border border-gray-400 outline-none hover:outline-none w-full h-9 px-3 py-1">
							<input type="email" name="email" id="" placeholder="Email" className="border-none outline-none hover:outline-none w-full h-full text-gray-500 text-sm" />
						</span>
						<span className="border border-gray-400 outline-none hover:outline-none w-full h-9 px-3 py-1">
							<input type="password" name="password" id="" placeholder="Password" className="border-none outline-none hover:outline-none bg-transparent w-full h-full text-gray-500 text-sm" />
						</span>
						<button type="submit" className="bg-orange-400 text-white rounded-md text-xs font-semibold w-full h-12 px-3 py-2 cursor-pointer">SUBMIT</button>
						<div className="flex items-center text-xs text-gray-400 justify-self-center">Already have an account?<span className="cursor-pointer text-orange-400 hover:font-semibold transition-all delay-200 ml-2">Login here</span></div>
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