import React from 'react'
import { tours } from "../utilities/utiles.js"

const Tours = () => {
	return (
		<div className="w-full h-fit lg:h-screen flex flex-col justify-center items-center px-5 md:px-10 lg:px-30">
			<span className="flex flex-col items-center space-y-4 my-3">
				<p className="text-lg font-semibold text-orange-600">Destination</p>
				<p className="text-4xl text-black font-bold">Tour Destinations</p>
			</span>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 w-full">
				{tours.map(data => (
					<div key={data.id} className="relative group flex flex-col space-y-4 h-36 bg-red-100 h-72 p-4 justify-center">
						<p className="absolute left-1/2 bg-orange-500 px-6 py-2 top-0 transform -translate-x-1/2 z-50 text-sm z-50 font-bold text-white">Ksh.{data.price}/person</p>
						<p className="absolute right-0 bg-orange-500 px-3 rounded-tl-full rounded-bl-full py-2 top-3/4 z-50 text-sm z-50 font-bold text-white group-hover:px-5 transition-all delay-300">{data.duration} Days Tours</p>
						<img className="absolute top-0 left-0 bottom-0 h-full w-full object-cover" src={data.image} alt="" />
						<div className="overlay"></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Tours