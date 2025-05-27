import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6';

const AboutProperty = () => {
	return (
		<div className="grid grid-cols-2 w-full px-20 md:px-10 px-5">
			<div className="col-span-8 flex-col flex">
				<p className="text-xl font-bold text-gray-700 my-6 space-y-4">About this Property.</p>
				<p className="text-sm font-normal text-gray-700"><span className="font-semibold">Spacious Accommodations:</span> Lantana Road Apartments- By Truestay in Nairobi offers spacious apartments with one bedroom and one bathroom. Each unit features a kitchenette, kitchen, air-conditioning, and garden views.</p>
				<p className="text-sm font-normal text-gray-700"><span className="font-semibold">Modern Amenities:</span> Guests enjoy free WiFi, a TV, and free on-site private parking. The property ensures a comfortable and convenient stay with all essential amenities available.</p>
				<p className="text-sm font-normal text-gray-700"><span className="font-semibold">Prime Location:</span> Located 5.6 mi from Wilson Airport, the apartment is close to attractions such as Kumbu Kumbu Art Gallery (13-minute walk), Eden Square Office Block and Nairobi Arboretum (1.2 mi), and Nairobi National Museum (1.9 mi).</p>
				<p className="text-sm font-normal text-gray-400">Distance in property description is calculated using © OpenStreetMap.</p>
				<p className="text-xl font-bold text-gray-700 my-6 space-y-4">Most Facilities.</p>
				<div className="flex space-x-3 items-center">
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
				</div>
			</div>
			<div className="col-span-2 border border-gray-200 rounded-md flex-col flex">
				<p className="text-xl font-bold text-gray-800">Property Highlights</p>
				<div className="flex space-x-3 items-center">
					{/*<span className="icon"></span>*/}
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
					<span className="icon">
						<p className="text-sm font-semibold text-gray-700">The entire place is yours</p>
						<p className="text-xs font-normal text-gray-500">1 bedroom, Bed, 1 bathroom, 600 m²</p>
					</span>
				</div>
				<div className="flex space-x-3 items-center">
					{/*<span className="icon"></span>*/}
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
					<span className="icon">
						<p className="text-sm font-semibold text-gray-700">Parking</p>
						<p className="text-xs font-normal text-gray-500">Free parking, Private parking, On-site parking</p>
					</span>
				</div>
				<div className="flex space-x-3 items-center">
					{/*<span className="icon"></span>*/}
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
					<span className="icon">
						<p className="text-sm font-semibold text-gray-700">Free Wifi</p>
						<p className="text-xs font-normal text-gray-500">Internet</p>
					</span>
				</div>
				<div className="flex space-x-3 items-center">
					{/*<span className="icon"></span>*/}
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
					<span className="icon">
						<p className="text-sm font-semibold text-gray-700">Views</p>
						<p className="text-xs font-normal text-gray-500">Garden View</p>
					</span>
				</div>
				<div className="flex space-x-3 items-center">
					{/*<span className="icon"></span>*/}
					<FaBarsStaggered className="flex lg:hidden h-8 w-8 text-white cursor-pointer" />
					<span className="icon">
						<p className="text-sm font-semibold text-gray-700">Kitchen Facilities</p>
						<p className="text-xs font-normal text-gray-500">Kitchenette, Kitchen</p>
					</span>
				</div>
				<button className="bg-blue-500 px-4 py-3 rounded-md font-semibold text-sm text-white">Reserve</button>
				<button className="bg-white px-4 py-3 border border-blue-400 rounded-md font-semibold text-sm text-blue-500">Saved</button>
			</div>
		</div>
	)
}

export default AboutProperty

