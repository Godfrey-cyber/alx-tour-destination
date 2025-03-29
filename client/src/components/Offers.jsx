import React from 'react'

const Offers = () => {
	return (
		<div className="w-full h-4/5 flex flex-col bg-white justify-center items-center px-30">
			<span className="flex flex-col items-center space-y-4 my-3">
				<p className="text-4xl text-black font-bold">Offers</p>
				<p className="text-sm font-normal text-gray-400">Promotions, deals, and special offers for you</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
						<div className="flex flex-col space-y-3">
							<p className="text-xl text-black font-bold">Offers</p>
							<p className="text-sm font-normal text-gray-400">Start your year with an adventure, saving 15% or more with Early 2025 Deals.</p>
							<button className="bg-amber-500 rounded-lg text-sm font-normal px-3 py-2 w-fit cursor-pointer">Save 15% or more</button>
						</div>
						<img src="https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-28 w-28 bg-cover" />
					</div>
					<div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
						<div className="flex flex-col space-y-3">
							<p className="text-xl text-black font-bold">Quick escape, quality time</p>
							<p className="text-sm font-normal text-gray-400">Save up to 20% with a Getaway Deal</p>
							<button className="bg-amber-500 rounded-lg text-sm font-normal px-3 py-2 w-fit cursor-pointer">Save on stays</button>
						</div>
						<img src="https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg" alt="" className="h-28 w-28 bg-cover" />
					</div>
				</div>
			</span>
		</div>
	)
}

export default Offers