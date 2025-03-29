import React, { useState } from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const SearchBar = ({ onSubmit }) => {
	const [checkInDate, setCheckInDate] = useState("");
	const [checkOutDate, setCheckOutDate] = useState("");
	const [destination, setDestination] = useState("");
	const [error, setError] = useState("");

	const handleCheckInChange = (event) => {
	    setCheckInDate(event.target.value);
	    if (checkOutDate && new Date(event.target.value) > new Date(checkOutDate)) {
	      	setCheckOutDate("");
	    }
  	};

  	const handleCheckOutChange = (event) => {
	    if (new Date(event.target.value) < new Date(checkInDate)) {
	      	setError("Checkout date must be after check-in date.");
	    } else {
		    setError("");
		    setCheckOutDate(event.target.value);
	    }
	};

	const handleDestination = (event) => {
		setDestination(event.target.value)
	}

	const handleSubmit = (event) => {
	    event.preventDefault();
	    if (!checkInDate || !checkOutDate || !destination) {
		    setError("Both dates are required.");
		    return;
	    }
	    onSubmit({ checkInDate, checkOutDate, destination });
	};

	const formData = { checkInDate, checkOutDate, destination }
	console.log(formData)
	return (
		<form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5  h-fit lg:min-h-28 bg-white shadow-lg shadow-gray-300 w-4/5 divide-gray-300 divide-y-1 lg:divide-x-1 mx-auto   absolute left-1/2 -bottom-80 lg:-bottom-14 transform -translate-x-1/2 z-50">
			<div className="flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">DESTINATION</p>
				<span className="flex space-x-1 items-center">
					<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					<input value={destination} onChange={handleDestination} type="text" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Search place" />
				</span>
			</div>
			<div className="flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">CHECK-IN DATE</p>
				<span className="flex space-x-1 items-center">
					{/*<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />*/}
					<input value={checkInDate} onChange={handleCheckInChange} type="date" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Check In Date" />
				</span>
			</div>
			<div className="flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">CHECK-OUT DATE</p>
				<span className="flex space-x-1 items-center">
					{/*<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />*/}
					<input value={checkOutDate} onChange={handleCheckOutChange} type="date" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Checkout Date" />
				</span>
			</div>
			<div className="flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">PRICE LIMIT</p>
				<span className="flex space-x-1 items-center">
					<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					<input type="text" name="" id="" className="border-none outline-none w-4/5 h-5" placeholder="Price" />
				</span>
			</div>
			<button type="submit" className="h-14 lg:h-full bg-orange-600 text-white text-sm font-semibold cursor-pointer hover:bg-orange-500 transition-all delay-300">SEARCH</button>
		</form>
	)
}

export default SearchBar