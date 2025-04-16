import React from 'react';
import BookingModal from './BookingModal.jsx';

const Offers = () => {
	return (
		<div className="w-full h-screen lg:h-4/5 flex flex-col bg-white justify-center items-center mt-70 lg:mt-40 px-5 md:px-10 lg:px-30">
			<span className="flex flex-col items-center space-y-4 my-3">
				<p className="text-4xl text-black font-bold">Offers</p>
				<p className="text-sm font-normal text-gray-400">
					Promotions, deals, and special offers for you
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 gap-4">
						<div className="flex flex-col space-y-3">
							<p className="text-xl text-black font-bold">
								Offers
							</p>
							<p className="text-sm font-normal text-gray-400">
								Start your year with an adventure, saving 15% or
								more with Early 2025 Deals.
							</p>
							<button className="bg-amber-500 rounded-lg text-sm font-normal px-3 py-2 w-fit cursor-pointer">
								Save 15% or more
							</button>
						</div>
						<img
							src="https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
							className="hidden md:flex h-28 min-w-28 w-28 bg-cover rounded-md"
						/>
					</div>
					<div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 gap-4">
						<div className="flex flex-col space-y-3">
							<p className="text-xl text-black font-bold">
								Quick escape, quality time
							</p>
							<p className="text-sm font-normal text-gray-400">
								Save up to 20% with a Getaway Deagap-4l
							</p>
							<button className="bg-amber-500 rounded-lg text-sm font-normal px-3 py-2 w-fit cursor-pointer">
								Save on stays
							</button>
						</div>
						<img
							src="https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg"
							alt=""
							className="hidden md:flex h-28 min-w-28 w-28 bg-cover rounded-md"
						/>
					</div>
				</div>
			</span>
		</div>
	);
};

export default Offers;
