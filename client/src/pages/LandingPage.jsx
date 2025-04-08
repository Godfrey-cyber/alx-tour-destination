import React from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import Header from '../components/Hearder.jsx';
import Content from '../components/Content.jsx';
import About from '../components/About.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"

const LandingPage = () => {
	const navigate = useNavigate();
	const { user, loading, error, accessToken } = useSelector(
		state => state.auth
	);
	console.log(user)
	return (
		<div className="flex w-full h-screen flex flex-col relative">
			<Header />
			<div className="overlay transition-all delay-300"></div>
			<img
				src="https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt=""
				className="w-full h-full object-cover bg-fixed"
			/>
			<div className="mt-5 flex space-x-6 items-center">
				{/*<span className="absolute top-1/2 bottom-1/2 transform -translate-y-1/2 translate-x-1/2 left-2 z-50 flex justify-center items-center bg-white text-white rounded-full w-10 h-10 hover:bg-amber-400 transition-all delay-300 cursor-pointer">
		         	<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
		        </span>*/}
				{/*<span className="absolute top-1/2 bottom-1/2 transform -translate-y-1/2 -translate-x-1/2 right-2 z-50 flex justify-center items-center bg-white text-white rounded-full w-10 h-10 hover:bg-amber-400 transition-all delay-300 cursor-pointer">
		          	<MdOutlineChevronRight className="h-5 w-5 text-gray-500" />
		        </span>*/}
			</div>
			<div className="flex flex-col lg:justify-start justify-center lg:items-start items-center space-y-3 absolute top-1/2 bottom-1/2 transform -translate-y-1/2 translate-x-1/2 left-2 z-50 w-1/2 lg:w-1/3">
				<h2 className="text-lg lg:text-start text-center text-orange-500 font-semibold">
					Trusted by millions worldwide
				</h2>
				<p className="text-4xl lg:text-start text-center text-white font-bold">
					Welcome to world's best booking site
				</p>
				<p className="text-sm lg:text-start text-center text-white font-semibold">
					Choose from houses, cabins, villas and more
				</p>
				<button
					onClick={() => navigate('/home')}
					className="text-sm font-semibold text-white bg-orange-600 w-fit rounded-full px-6 py-3 my-4"
				>
					Search Destination
				</button>
			</div>
			<Content />
			<About />
		</div>
	);
};

export default LandingPage;
