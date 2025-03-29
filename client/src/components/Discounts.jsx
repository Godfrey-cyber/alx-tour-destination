import React from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";


const Discounts = () => {
	return (
		<div className="w-full h-1/2 flex flex-col bg-white justify-center items-center my-6 px-5 md:px-10 lg:px-30">
			<div className="flex flex-col items-center space-y-4 my-3">
				<span className="flex flex-col items-center justify-center space-y-4 my-3 w-full">
					<p className="text-4xl text-black font-bold text-center">Trending Destinations</p>
				</span>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
					<div className="flex justify-between border border-gray-300 rounded-lg p-4 cursor-pointer">
						<div className="flex flex-col space-y-3">
							<p className="text-sm text-black font-bold">10% discount on rental cars</p>
							<p className="text-sm font-normal text-gray-400">Save on select rental cars.</p>
						</div>
						<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					</div>
					<div className="flex justify-between border border-gray-300 rounded-lg p-4 cursor-pointer">
						<div className="flex flex-col space-y-3">
							<p className="text-sm text-black font-bold">10-15% discounts on stays</p>
							<p className="text-sm font-normal text-gray-400">Complete 5 bookings to unlock Genious Level 5</p>
						</div>
						<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					</div>
					<div className="flex justify-between border border-gray-300 rounded-lg p-4 cursor-pointer">
						<div className="flex flex-col space-y-3">
							<p className="text-sm text-black font-bold">10-15% discounts on rental cars</p>
							<p className="text-sm font-normal text-gray-400">Complete 5 bookings to unlock Genious Level 5</p>
						</div>
						<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					</div>
					<div className="flex justify-between border border-gray-300 rounded-lg p-4 cursor-pointer">
						<div className="flex flex-col space-y-3">
							<p className="text-sm text-black font-bold">Free breakfasts</p>
							<p className="text-sm font-normal text-gray-400">Complete 5 bookings to unlock Genious Level 5</p>
						</div>
						<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Discounts