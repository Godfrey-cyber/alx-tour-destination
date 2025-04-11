import React, { useState, useEffect, useCallback } from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { axiosInstance } from "../utilities/utiles.js"
import debounce from 'lodash.debounce'

const LocationModal = ({ formData, handleDateValidation}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [showSuggestions, setShowSuggestions] = useState(false)
	const [query, setQuery] = useState('')
	const [results, setResults] = useState([])
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState({
	    dateError: "",
	});
	const [message, setMessage] = useState("");

	const fetchDestinations = async (search) => {

		try {
			setLoading(true)
			const res = await axiosInstance.get(`/destinations/all-destinations?search=${search}`)
			if(res.status === 200) {
				setResults(res.data.destinations)
				console.log("Searched Destinations", destination)
			}
		} catch (error) {
			console.log('Failed to load destinations', error)
		} finally {
			setLoading(false)
		}
	}

	const onSelectDestination = (destination) => {
		console.log('Selected:', destination)
		// Set this destination to form state or redirect, etc.
	}

	const debouncedSearch = useCallback(
		debounce((searchTerm) => {
			if (searchTerm.trim()) {
				fetchDestinations(searchTerm)
			} else {
				setResults([])
			}
		}, 300),
		[]
	)
	useEffect(() => {
		debouncedSearch(query)
	}, [query, debouncedSearch])

	const handleSelect = (destination) => {
		setQuery(destination.title)
		setResults([])
		onSelectDestination(destination) // send it up to parent component if needed
	}

	const handleModal = () => {
		setIsModalOpen(prev => !prev)
	}
	
	const handleChange = (event) => {
	    const { name, value } = event.target;
	    setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="w-96 rounded-md h-fit min-h-48 shadow-lg shadow-gray-300 absolute top-25 left-0 z-50 bg-white">
			<div className="flex flex-col space-y-4 p-6 bg-white w-full overflow-y-auto">
				{loading && <div className="flex items-center justify-center w-full h-full text-sm mt-1">Searching...</div>}
					{results.length > 0 && (
						<ul className="border-none">
							{results.map((dest) => (
								<li
									key={dest._id}
									onClick={() => handleSelect(dest)}
									className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
								>
									{dest.title} — {dest.location.city}, {dest.location.country}
								</li>
							))}
						</ul>
					)}
			</div>
		</div>
	)
}
export default LocationModal