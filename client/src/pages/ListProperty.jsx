import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
// packages
import Select from 'react-select';
import countryList from 'react-select-country-list';
import axios from "axios"
import { useSelector } from 'react-redux'
// files
import DestinationHeader from '../components/DestinationHeader.jsx';
import { axiosInstance } from "../utilities/utiles.js"
const cloudname  = 'du1twfax7'
// CLOUDINARY_URL=cloudinary://633536413291711:nTNA6BP8mafwhDMTDngfLOUHL44@du1twfax7"
const ListProperty = () => {
	const [uploading, setUploading] = useState(false);
	const { user, loading, error, accessToken, isAuthenticated } = useSelector(
		state => state.auth
	);
	const [countryOptions] = useState(countryList().getData());
	const options = [
	  { value: 'WiFi', label: 'WiFi' },
	  { value: 'Balcony', label: 'Balcony' },
	];
	const propertyTypes = [
	  { value: 'Apartment', label: 'Apartment' },
	  { value: 'Villa', label: 'Villa' },
	  { value: 'Cottage', label: 'Cottage' },
	  { value: 'Studio', label: 'Studio' },
	  { value: 'Penthouse', label: 'Penthouse' },
	  { value: 'Treehouse', label: 'Treehouse' },
	];
	const categories = [
		'Beach',
		'Eco',
		'Mountain',
		'City',
		'Countryside',
		'Desert',
		'Historic',
		'Luxury',
		'Cultural',
	];

	const amenitiesList = [
		'WiFi',
		'Parking',
		'Pool',
		'Breakfast',
		'Air Conditioning',
		'TV',
	];

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		location: {
			country: '',
			city: '',
			address: '',
			coordinates: ['', ''], // [longitude, latitude]
		},
		images: [''],
		pricePerNight: '',
		maxGuests: '',
		amenities: [],
		category: 'Beach',
	});

	const getUserLocation = () => {
	  if (!navigator.geolocation) {
		    alert("Geolocation is not supported by your browser");
		    return;
		}

		navigator.geolocation.getCurrentPosition((position) => {
	      const { latitude, longitude } = position.coords;
	      setFormData(prev => ({
	        ...prev,
	        location: {
	          ...prev.location,
	          coordinates: [longitude, latitude],
	        },
	      }));
	      alert(`Location captured: Latitude ${latitude}, Longitude ${longitude}`);
	    }, (error) => {
	      console.error(error);
	      alert("Unable to retrieve your location");
	    });
	}

	const handleChange = e => {
		const { name, value } = e.target;
		if (name.startsWith('location.')) {
			const key = name.split('.')[1];
			setFormData(prev => ({
				...prev,
				location: {
					...prev.location,
					[key]: value,
				},
			}));
			console.log(formData);
		} else {
			setFormData(prev => ({ ...prev, [name]: value }));
		}
	};

	const handleCoordinateChange = (index, value) => {
		const coords = [...formData.location.coordinates];
		coords[index] = value;
		setFormData(prev => ({
			...prev,
			location: {
				...prev.location,
				coordinates: coords,
			},
		}));
	};
	console.log(formData);

	// image uploading
	const handleImageUpload = async (files) => {
	  const urls = [];
	  setUploading(true);

	  for (const file of files) {
	    const formData = new FormData();
	    formData.append('file', file);
	    formData.append('upload_preset', 'godfrey-preset'); // 🔁 Replace
	    formData.append('cloud_name', 'du1twfax7');          // 🔁 Replace

	    const { data } = await axios.post(`https://api.cloudinary.com/v1_1/du1twfax7/image/upload`, formData);

	    console.log(data)
	    urls.push(data.secure_url);
	  }

	  setFormData(prev => ({
	    ...prev,
	    images: [...prev.images, ...urls],
	  }));

	  setUploading(false);
	};

	const handleSubmit = async (e) => {
	  e.preventDefault();

	  const payload = {
	    ...formData,
	    location: {
	      ...formData.location,
	      coordinates: formData.location.coordinates.map(Number)
	    },
	    images: formData.images,
	    pricePerNight: Number(formData.pricePerNight),
	    maxGuests: Number(formData.maxGuests),
	  };

	  try {
	    const res = await axiosInstance.post('/destinations/add-destination', payload, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (res.status === 201) {
			console.log(res.data)
	    	alert('Destination created!');
		}
	    // Optionally reset formData here
	  } catch (error) {
	    console.error('Error creating destination:', error);
	    alert('Error creating destination');
	  }
	};
	return (
		<div className="w-full h-full flex flex-col ">
			<DestinationHeader />
			<div className="flex flex-col px-2 md:px-10 lg:px-20 my-6">
				<p className="text-lg font-bold text-black">Add Property.</p>
				<form
					onSubmit={handleSubmit}
					action=""
					className="grid grid-cols-12 gap-4 border border-gray-300 p-5 w-full"
				>
					<div className="col-span-12 lg:col-span-6 flex flex-col space-y-3">
						<label htmlFor="name">Title/Name</label>
						<span className="flex border border-gray-700 rounded-md h-12">
							<input
								type="text"
								name="title"
								value={formData.title}
								onChange={handleChange}
								id="name"
								placeholder="Property Name"
								className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
							/>
						</span>
						<label htmlFor="name">Location</label>
						<div className="grid grid-cols-12 gap-4">
							<span className="col-span-12 md:col-span-4 flex border border-gray-700 rounded-md h-12">
								<Select
									type="text"
									options={countryOptions}
									name="location.country" 
									value={countryOptions.find(option => option.value === formData.location.country)}
									onChange={(selected) => {
								    setFormData(prev => ({
								        ...prev,
								        location: {
								          ...prev.location,
								          country: selected.value,
								        },
								      }));
								    }}
									id="name"
									placeholder="e.g. Kenya"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
							<span className="col-span-12 md:col-span-4 flex border border-gray-700 rounded-md h-12">
								<input
									type="text"
									name="location.city" value={formData.location.city} onChange={handleChange}
									id="name"
									placeholder="e.g. Nairobi"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
							<span className="col-span-12 md:col-span-4 flex border border-gray-700 rounded-md h-12">
								<input
									type="text"
									name="location.address" value={formData.location.address} onChange={handleChange}
									id="name"
									placeholder="Address"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
						</div>
						{/*Host details*/}
						<label className="text-lg text-gray-800 font-semibold" htmlFor="name">Host Details</label>
						<div className="grid grid-cols-12 gap-4">
							<div className="col-span-12 md:col-span-6">
								<label className="text-sm text-gray-800 font-semibold" htmlFor="longitude">Price per Night</label>
								<span className="flex border border-gray-700 rounded-md h-12">
									<input
										type="number"
								        name="pricePerNight"
								        value={formData.pricePerNight}
								        onChange={handleChange}
										id="name"
										placeholder="price Per Night"
										className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
									/>
								</span>
							</div>
							<div className="col-span-12 md:col-span-6">
								<label className="text-sm text-gray-800 font-semibold" htmlFor="name">Maximum Guests</label>
								<span className="flex border border-gray-700 rounded-md h-12">
									<input
										type="number"
								        name="maxGuests"
								        value={formData.maxGuests}
								        onChange={handleChange}
										id="name"
										placeholder="Maximum Guests"
										className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
									/>
								</span>
							</div>
						</div>
						{/*location coordinates*/}
						<label className="text-lg text-gray-800 font-semibold" htmlFor="name">Geo Coordinates</label>
						<div className="grid grid-cols-12 gap-4">
							<div className="col-span-12 md:col-span-6">
								<label className="text-sm text-gray-800 font-semibold" htmlFor="longitude">Longitude</label>
								<span className="flex border border-gray-700 rounded-md h-12">
									<input
										type="number"
							            value={formData.location.coordinates[0]}
							            onChange={(e) => handleCoordinateChange(0, e.target.value)}
							            onClick={getUserLocation}
										id="name"
										placeholder="Longitude"
										className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
									/>
								</span>
							</div>
							
							<div className="col-span-12 md:col-span-6">
								<label className="text-sm text-gray-800 font-semibold" htmlFor="name">Latitude</label>
								<span className="flex border border-gray-700 rounded-md h-12">
									<input
										type="number"
							            value={formData.location.coordinates[1]}
							            onClick={getUserLocation}
							            onChange={(e) => handleCoordinateChange(1, e.target.value)}
										id="name"
										placeholder="Latitude"
										className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
									/>
								</span>
							</div>
						</div>
						{/*// Property description*/}
						<label htmlFor="name">Property Description</label>
						<span className="flex border border-gray-400 rounded-md h-72 w-full">
							<textarea
								type="text"
								name="description" value={formData.description} onChange={handleChange}
								id="name"
								placeholder="Property Description"
								className="flex flex-col items-center justify-center outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
							/>
						</span>
					</div>
					<div className="col-span-12 md:col-span-6 flex flex-col space-y-3">
						<label htmlFor="name">Property Amenities</label>
						<span className="flex border border-gray-700 rounded-md h-12">
							<CreatableSelect
								  className="w-72"
								  isMulti
								  onChange={(selected) => setFormData(prev => ({
								    ...prev,
								    amenities: selected.map(opt => opt.value)
								  }))}
								  options={options}
							/>
						</span>
						<label htmlFor="name">Category</label>
						<span className="flex border border-gray-700 rounded-md h-12">
							<Select
								// style={ width: 'full'}
							  	options={propertyTypes}
							  	value={propertyTypes.find(option => option.value === formData.category)}
							  	onChange={(selected) => {
							    setFormData(prev => ({
							      ...prev,
							      category: selected.value,
							    }));
							  }}
							/>
						</span>
						<label htmlFor="name">Image Upload</label>
						<span className="flex border-3 border-gray-400 rounded-md h-72 w-full">
							<input
								type="file"
								accept="image/*"
								multiple
    							onChange={(e) => handleImageUpload(Array.from(e.target.files))}
								id="name"
								placeholder="Property Category"
								className="flex flex-col items-center justify-center outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
							/>
						</span>
					</div>
					
					<button className="bg-blue-700 rounded-md px-4 w-full md:w-fit py-3 text-white font-semibold text-sm" type="submit">Create Destination</button>
				</form>
			</div>
		</div>
	);
};

export default ListProperty;
