import React, { useState } from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import BookingModal from "./BookingModal.jsx"

const SearchBar = ({ onSubmit }) => {
	const destinations = ["Paris", "Tokyo", "New York", "Cape Town", "Rio de Janeiro"];
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formData, setFormData] = useState({
	    destination: "",
	    startDate: "",
	    endDate: "",
	});
	const [errors, setErrors] = useState({
	    dateError: "",
	});
	const [message, setMessage] = useState("");
	const { destination, startDate, endDate } = formData
	const handleChange = (event) => {
	    const { name, value } = event.target;
	    setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleModal = () => {
		setIsModalOpen(prev => !prev)
	}

  	const handleChildrenChange = (event) => {
	    const count = parseInt(event.target.value);
	    setFormData((prev) => ({
		    ...prev,
		    children: count,
		    childrenAges: Array(count).fill(""),
	    }));
  	};
  	const handleChildAgeChange = (index, value) => {
	    const newAges = [...formData.childrenAges];
	    newAges[index] = value;
	    setFormData((prev) => ({ ...prev, childrenAges: newAges }));
	}
	const handleDateValidation = () => {
	    let dateError = "";

	    const startDate = new Date(formData.startDate);
	    const endDate = new Date(formData.endDate);
	    const today = new Date();

	    if (startDate <= today) {
	      dateError = "Start date must be in the future.";
	    } else if (endDate <= today) {
	      dateError = "End date must be in the future.";
	    } else if (startDate >= endDate) {
	      dateError = "Start date must be before the end date.";
	    }

	    setErrors({ dateError });

	    return dateError === "";
    };
    const handleSubmit = (event) => {
	    event.preventDefault();
	    if (handleDateValidation()) {
	      setMessage("Booking successful!");
	      // You can send this data to your backend here
	      console.log("Booking Info:", formData);
	    } else {
	      setMessage("");
	    }
  	};
	return (
		<form
			onSubmit={handleSubmit}
			className="grid grid-cols-1 lg:grid-cols-5  h-fit lg:min-h-28 bg-white shadow-lg shadow-gray-300 w-4/5 divide-gray-300 divide-y-1 lg:divide-x-1 mx-auto absolute left-1/2 -bottom-80 lg:-bottom-14 transform -translate-x-1/2 z-50"
		>
			<div className="flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">
					DESTINATION
				</p>
				<span className="flex space-x-1 items-center">
					<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
					<input
						value={formData.destination}
						onChange={handleChange}
						type="text"
						name="destination"
						id=""
						className="border-none outline-none w-4/5 h-5"
						placeholder="Search place"
					/>
				</span>
			</div>
			<div className="flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">
					CHECK-IN DATE
				</p>
				<span className="flex space-x-1 items-center">
					{/*<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />*/}
					<input
						value={formData.startDate}
						onChange={handleChange}
						type="date"
						name="startDate"
						id=""
						className="border-none outline-none w-4/5 h-5"
						placeholder="Check In Date"
					/>
				</span>
			</div>
			<div className="flex flex-col space-y-3 h-full p-4 justify-center">
				<p className="text-sm font-semibold text-orange-600">
					CHECK-OUT DATE
				</p>
				<span className="flex space-x-1 items-center">
					{/*<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />*/}
					<input
						value={formData.endDate}
						onChange={handleChange}
						type="date"
						name="endDate"
						id=""
						className="border-none outline-none w-4/5 h-5"
						placeholder="Checkout Date"
					/>
				</span>
			</div>
			<div className="flex flex-col space-y-3 h-full p-4 justify-center relative">
				<p className="text-sm font-semibold text-orange-600">
					Guests - Rooms
				</p>
				<span onClick={handleModal} className="flex space-x-1 items-center">
					<input
						type="text"
						name="guests"
						id=""
						className="border-none outline-none w-full h-5"
						placeholder="Guests"
					/>
				</span>
			</div>
			<button
				type="submit"
				className="h-14 lg:h-full bg-orange-600 text-white text-sm font-semibold cursor-pointer hover:bg-orange-500 transition-all delay-300"
			>
				SEARCH
			</button>
			{isModalOpen && <BookingModal handleSubmit={handleSubmit} formData={formData} handleDateValidation={handleDateValidation} />}
		</form>
	);
};

export default SearchBar;
