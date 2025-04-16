import React, { useState, useEffect, useCallback } from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import BookingModal from './BookingModal.jsx';
import LocationModal from './LocationModal.jsx';
import { axiosInstance } from '../utilities/utiles.js';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSubmit }) => {
	// const destinations = ["Paris", "Tokyo", "New York", "Cape Town", "Rio de Janeiro"];
	// const [destinationsSearch, setDestinationsSearch] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [openLocationModal, setOpenLocationModal] = useState(false);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [destinationId, setDestinationId] = useState('');

	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	const [formData, setFormData] = useState({
		destination: '',
		startDate: '',
		endDate: '',
	});
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({
		dateError: '',
	});
	const [message, setMessage] = useState('');
	const { destination, startDate, endDate } = formData;

	// GET Destinations onSelectDestination
	// useEffect(() => {
	const fetchDestinations = async search => {
		try {
			setLoading(true);
			const res = await axiosInstance.get(
				`/destinations/all-destinations?search=${search}`
			);
			if (res.status === 200) {
				setResults(res.data.destinations);
				console.log('Searched Destinations', destination);
			}
		} catch (error) {
			console.log('Failed to load destinations', error);
		} finally {
			setLoading(false);
		}
	};

	const onSelectDestination = destination => {
		console.log('Selected:', destination);
		// Set this destination to form state or redirect, etc.
	};

	const debouncedSearch = useCallback(
		debounce(searchTerm => {
			if (searchTerm.trim()) {
				fetchDestinations(searchTerm);
			} else {
				setResults([]);
			}
		}, 300),
		[]
	);
	useEffect(() => {
		debouncedSearch(query);
	}, [query, debouncedSearch]);

	const handleSelect = destination => {
		setQuery(destination.title);
		setResults([]);
		onSelectDestination(destination); // send it up to parent component if needed
		setDestinationId(destination._id);
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleModal = () => {
		setIsModalOpen(prev => !prev);
	};

	const handleLocationModal = () => {
		setOpenLocationModal(prev => !prev);
	};

	const handleChildrenChange = event => {
		const count = parseInt(event.target.value);
		setFormData(prev => ({
			...prev,
			children: count,
			childrenAges: Array(count).fill(''),
		}));
	};
	const handleChildAgeChange = (index, value) => {
		const newAges = [...formData.childrenAges];
		newAges[index] = value;
		setFormData(prev => ({ ...prev, childrenAges: newAges }));
	};
	const handleDateValidation = () => {
		let dateError = '';

		const startDate = new Date(formData.startDate);
		const endDate = new Date(formData.endDate);
		const today = new Date();

		if (startDate <= today) {
			dateError = 'Start date must be in the future.';
		} else if (endDate <= today) {
			dateError = 'End date must be in the future.';
		} else if (startDate >= endDate) {
			dateError = 'Start date must be before the end date.';
		}

		setErrors({ dateError });

		return dateError === '';
	};
	const handleSubmit = event => {
		event.preventDefault();
		if (handleDateValidation()) {
			setMessage('Booking successful!');
			// You can send this data to your backend here
			console.log('Booking Info:', formData);
		} else {
			setMessage('');
		}
	};

	const handleSuggestionClick = destination => {
		setFormData(prev => ({ ...prev, destination: destination.name }));
		setShowSuggestions(false);
	};

	const allData = { startDate, endDate, destination: destinationId };

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
					<FaLocationCrosshairs className="h-5 w-5 text-gray-500" />
					<input
						type="text"
						value={query}
						onChange={e => setQuery(e.target.value)}
						placeholder="Search destinations..."
						className="border-none outline-none w-4/5 h-5"
					/>
					<div className="w-full lg:w-4/5 rounded-md h-fit max-h-96 shadow-lg shadow-gray-300 absolute top-45 left-0 z-50 bg-white">
						{loading && (
							<div className="flex items-center justify-center w-full h-full text-sm mt-1">
								Searching...
							</div>
						)}
						{results.length > 0 && (
							<ul className="border-none">
								{results.map(dest => (
									<li
										key={dest._id}
										onClick={() => handleSelect(dest)}
										className="flex items-center text-sm fonst-normal text-gray-600 px-6 py-2 hover:bg-gray-100 cursor-pointer"
									>
										<IoLocationOutline className="h-5 w-5 text-gray-600 mr-2" />
										{dest.title} — {dest.location.city},{' '}
										{dest.location.country} | {dest.category}, {dest.amenities}
									</li>
								))}
							</ul>
						)}
					</div>
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
				<span
					onClick={handleModal}
					className="flex space-x-1 items-center"
				>
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
			{isModalOpen && (
				<BookingModal
					handleSubmit={handleSubmit}
					formData={allData}
					handleDateValidation={handleDateValidation}
				/>
			)}
			{/*{<LocationModal />}*/}
		</form>
	);
};

export default SearchBar;
