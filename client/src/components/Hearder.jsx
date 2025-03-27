import React from 'react'

const Hearder = () => {
	return (
		<div className="flex items-center justify-between w-full bg-transparent absolute px-5 md:px-10 lg:px-30 h-20 z-50">
			<div className="flex flex-col group cursor-pointer">
				<p className="text-2xl font-bold text-white group-hover:text-orange-500 transition-all delay-300">Pacific</p>
				<p className="text-xs font-semibold text-orange-500 group-hover:text-white transition-all delay-300">TRAVEL AGENCY</p>
			</div>
			<div className="flex items-center space-x-3">
				<p className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300">Home</p>
				<p className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300">About</p>
				<p className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300">Destination</p>
				<p className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300">Hotel</p>
				<p className="text-sm font-normal text-white font-semibold hover:text-orange-500 cursor-pointer transition-all delay-300">Blog</p>
			</div>
		</div>
	)
}

export default Hearder