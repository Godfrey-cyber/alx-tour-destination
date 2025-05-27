import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6';

const AboutProperty = () => {
	return (
		<div className="grid grid-cols-2 w-full">
			<div className="col-span-8 flex-col flex"></div>
			<div className="col-span-2 border border-gray-200 rounded-md flex-col flex">
				<p className="text-2xl font-bold text-gray-700">Property Highlights</p>
				<div className="flex space-x-3 items-center">
					{/*<span className="icon"></span>*/}
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
					<span className="icon">
						<p className="text-sm font-semibold text-gray-700">The entire place is yours</p>
						<p className="text-xs font-normal text-gray-500">1 bedroom, Bed, 1 bathroom, 600 m²</p>
					</span>
				</div>
			</div>
		</div>
	)
}

export default AboutProperty

