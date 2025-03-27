import React from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const SearchBar = () => {
	return (
		<div className="grid grid-cols-15 -mt-18 z-50 min-h-28 bg-white shadow-md shadow-gray-300 w-4/5 divide-gray-300 divide-x-1 mx-auto">
			<div className="col-span-3 flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">DESTINATION</p>
				<span className="flex space-x-1 items-center">
					<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					<input type="text" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Search place" />
				</span>
			</div>
			<div className="col-span-3 flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">CHECK-IN DATE</p>
				<span className="flex space-x-1 items-center">
					{/*<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />*/}
					<input type="date" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Check In Date" />
				</span>
			</div>
			<div className="col-span-3 flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">CHECK-OUT DATE</p>
				<span className="flex space-x-1 items-center">
					{/*<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />*/}
					<input type="date" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Checkout Date" />
				</span>
			</div>
			<div className="col-span-3 flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">PRICE LIMIT</p>
				<span className="flex space-x-1 items-center">
					<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					<input type="text" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Price" />
				</span>
			</div>
			<button className="col-span-3 h-full bg-orange-600 text-white text-sm font-semibold cursor-pointer hover:bg-orange-500 transition-all delay-300">SEARCH</button>
		</div>
	)
}

export default SearchBar