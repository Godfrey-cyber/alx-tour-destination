import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import CartModal from './CartModal.jsx';
import { useNavigate } from 'react-router-dom';
import  { useSelector } from "react-redux"

const Hearder = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openMenuBar = () => {
		setIsModalOpen(true);
	};
	const { user, loading, error, accessToken } = useSelector(
		state => state.auth
	);
	return (
		<div className="flex items-center justify-between w-full bg-transparent absolute px-5 md:px-10 lg:px-30 h-20 z-50">
			<div
				onClick={() => navigate('/home')}
				className="flex flex-col group cursor-pointer bg-white justify-center h-full w-fit px-1"
			>
				<p className="text-2xl font-bold text-black group-hover:text-orange-500 transition-all delay-300">
					Pacific
				</p>
				<p className="text-xs font-semibold text-orange-500 group-hover:text-black transition-all delay-300">
					TRAVEL AGENCY
				</p>
			</div>
			<div className="lg:flex items-center space-x-5 hidden">
				<p
					onClick={() => navigate('/home')}
					className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300"
				>
					Home
				</p>
				<p
					onClick={() => navigate('/')}
					className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300"
				>
					About
				</p>
				<p
					onClick={() => navigate('/')}
					className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300"
				>
					Destination
				</p>
				<p
					onClick={() => navigate('/')}
					className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300"
				>
					Hotel
				</p>
				{!accessToken ? <button
					onClick={() => navigate('/login')}
					className="text-sm font-normal text-white font-semibold hover:bg-orange-500 cursor-pointer transition-all delay-300 px-4 py-2 bg-amber-500 rounded-md"
				>
					Register
				</button> : <button
					onClick={() => navigate('/booking')}
					className="text-sm font-normal text-white font-semibold hover:bg-orange-500 cursor-pointer transition-all delay-300 px-4 py-2 bg-amber-500 rounded-md"
				>
					Book
				</button>}
			</div>
			<FaBarsStaggered
				onClick={() => openMenuBar()}
				className="flex lg:hidden h-8 w-8 text-white cursor-pointer"
			/>
			<CartModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
};

export default Hearder;
