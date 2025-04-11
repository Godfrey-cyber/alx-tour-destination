import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { axiosInstance } from "../utilities/utiles.js"
import { useSelector } from 'react-redux'

const BookingModal = ({ formData, handleDateValidation, setFormData }) => {
	const ages = [...Array.from({ length: 17 }, (_, i) => `${i + 1} year${i + 1 === 1 ? "" : "s"} old`)];
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [adultCount, setAdultCount] = useState(1);
	const [roomCount, setRoomCount] = useState(1);
	const [childrenCount, setChildrenCount] = useState(0);
	const [childrenAges, setChildrenAges] = useState([]);
	const [errors, setErrors] = useState({
	    dateError: "",
	});
	const [message, setMessage] = useState("");

	const { accessToken } = useSelector(state => state.auth);
	// control adult
	const increaseAdult = () => setAdultCount((prev) => prev + 1);
  	const decreaseAdult = () => setAdultCount((prev) => Math.max(1, prev - 1));

  	// control rooms
  	const increaseRoom = () => setRoomCount((prev) => prev + 1);
  	const decreaseRoom = () => setRoomCount((prev) => Math.max(1, prev - 1));

  	// increase children
    const increaseChildren = () => {
	    setChildrenCount((prev) => prev + 1);
	    setChildrenAges((prev) => [...prev, ""]);
	};

	// decrease children
	const decreaseChildren = () => {
	    if (childrenCount > 0) {
	      	setChildrenCount((prev) => prev - 1);
	      	setChildrenAges((prev) => prev.slice(0, -1));
	    }
  	};

  	// children age change
  	const handleChildAgeChange = (index, value) => {
	    const newAges = [...childrenAges];
	    newAges[index] = value;
	    setChildrenAges(newAges);
	};

	const handleChange = (event) => {
	    const { name, value } = event.target;
	    setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const { destination, startDate, endDate } = formData
	console.log(formData)

	const handleModal = () => {
		setIsModalOpen(prev => !prev)
	}

	const composedData = { 
		destination,
	    startDate,
	    endDate,
	    rooms: roomCount,
	    adults: adultCount,
	    children: childrenCount,
	    // childrenAges: childrenAges?.filter((age) => age !== ""),
	    childrenAges: Array.isArray(childrenAges) ? childrenAges.filter((age) => age !== "") : [],
	}
	console.log(composedData)

    const handleDestinationSelect = (destination) => {
		console.log('Selected:', destination)
		// Set this destination to form state or redirect, etc.
	}

    const handleSubmit = async (event) => {
	    event.preventDefault();
	    if (handleDateValidation()) {
	      	console.log("Booking successful!");
	    }
	    if (composedData.destination && composedData.startDate && composedData.endDate && composedData.children && composedData.rooms && composedData.adults) {
		    try {
			    const res = await axiosInstance.post("/bookings/addBooking", composedData, { headers: { Authorization: `Bearer ${accessToken}` },
			    });

			    if (res.status === 201) {
				    // Reset values
				    setAdultCount(1);
				    setRoomCount(1);
				    setChildrenCount(0);
				    setChildrenAges([]);
				    setFormData({ destination: "", startDate: "", endDate: "" });

				    handleModal();
				    setMessage("Booking successful!");
			    }
		  	} catch (err) {
			    setAdultCount(1)
				setRoomCount(1)
				setChildrenCount(0)
				setChildrenAges([])
				// toast.error(err?.response?.data?.msg)
				console.log(err)
		    	setMessage("Booking failed. Please try again.");
			}
		} else {
			console.log("Something went wrong!")
		}
  	};
	return (
		<div className="w-76 rounded-md h-fit min-h-48 shadow-lg shadow-gray-300 absolute top-25 right-0 z-50 bg-white">
			<div className="flex flex-col space-y-4 p-6 w-full">
				<div className="flex items-center justify-between space-x-3 w-full">
					<p className="text-sm font-normal text-gray-700">Adults</p>
					<span className="flex items-center space-x-4 border border-gray-400 rounded-md p-1 w-fit">
						<p onClick={decreaseAdult} className="text-lg font-normal text-gray-500 cursor-pointer px-1 hover:bg-orange-500 rounded-md">-</p>
						<p className="text-lg font-normal text-gray-500 px-1">{adultCount}</p>
						<p onClick={increaseAdult} className="text-lg font-normal text-gray-500 cursor-pointer hover:bg-orange-500 rounded-md px-1">+</p>
					</span>
				</div>
				<div className="flex items-center justify-between space-x-3 w-full">
					<p className="text-sm font-normal text-gray-700">Children</p>
					<span className="flex items-center space-x-4 border border-gray-400 rounded-md p-1 w-fit">
						<p onClick={decreaseChildren} className="text-lg font-normal text-gray-500 cursor-pointer px-1 hover:bg-orange-500 rounded-md">-</p>
						<p className="text-lg font-normal text-gray-500 px-1">{childrenCount}</p>
						<p onClick={increaseChildren} className="text-lg font-normal text-gray-500 cursor-pointer hover:bg-orange-500 rounded-md px-1">+</p>
					</span>
				</div>
				<div className="grid grid-cols-2 gap-3">
					{childrenAges.map((age, index) => (
			            <div key={index} className="flex items-center justify-between">
			              <select
						    value={age}
						    onChange={(e) => handleChildAgeChange(index, e.target.value)}
						    className="border border-gray-300 rounded-md px-2 py-2 w-fit font-xs text-sm text-gray-700"
						    >
						      <option value="">Age Needed</option>
						      {ages.map((ageOption, i) => (
						        <option key={i} value={ageOption}>
						          {ageOption}
						        </option>
						      ))}
						    </select>
			            </div>
		          	))}
	          	</div>
				<div className="flex items-center justify-between space-x-3 w-full">
					<p className="text-sm font-normal text-gray-700">Rooms</p>
					<span className="flex items-center space-x-4 border border-gray-400 rounded-md p-1 w-fit">
						<p onClick={decreaseRoom} className="text-lg font-normal text-gray-500 cursor-pointer px-1 hover:bg-orange-500 rounded-md">-</p>
						<p className="text-lg font-normal text-gray-500 px-1">{roomCount}</p>
						<p onClick={increaseRoom} className="text-lg font-normal text-gray-500 cursor-pointer hover:bg-orange-500 rounded-md px-1">+</p>
					</span>
				</div>
				<button onClick={handleSubmit} type="submit" className="bg-amber-500 px-4 py-2 text-white rounded-md cursor-pointer">Done</button>
			</div>
		</div>
	)
}
export default BookingModal