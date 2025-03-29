import React from 'react'
import { destinations } from "../utilities/utiles.js"

const Destinations = () => {
	return (
		<div className="w-full min-h-screen lg:h-screen flex flex-col bg-pink-50 justify-center items-center px-5 md:px-10 lg:px-30">
			<span className="flex flex-col items-center justify-center space-y-4 my-3 w-full">
				<p className="text-lg font-semibold text-orange-600">Welcome to Pacific</p>
				<p className="text-4xl text-black font-bold text-center">Trending Destinations</p>
			</span>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 w-full">
				{destinations.map(data => (
					<div key={data.id} className="relative group flex flex-col space-y-4 h-36 bg-red-100 h-72 p-4 justify-center">
						<p className="absolute left-1/2 bg-orange-500 px-6 py-2 top-0 transform -translate-x-1/2 z-50 text-sm z-50 font-bold text-white">{data.country}</p>
						<p className="absolute right-0 bg-orange-500 px-3 rounded-tl-full rounded-bl-full py-2 top-3/4 z-50 text-sm z-50 font-bold text-white group-hover:px-5 transition-all delay-300">{data.tours} Tours</p>
						<img className="absolute top-0 left-0 bottom-0 h-full w-full object-cover" src={data.image} alt="" />
						<div className="overlay"></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Destinations