import React, { useState } from 'react';
import DestinationHeader from '../components/DestinationHeader.jsx';

const ListProperty = () => {
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
	return (
		<div className="w-full h-full flex flex-col ">
			<DestinationHeader />
			<div className="flex flex-col px-2 md:px-10 lg:px-20 my-6">
				<p className="text-lg font-bold text-black">Add Property.</p>
				<form
					action=""
					className="grid grid-cols-12 gap-4 border border-gray-300 p-5"
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
							<span className="col-span-12 md:col-span-3 flex border border-gray-700 rounded-md h-12">
								<input
									type="text"
									value=""
									name="name"
									id="name"
									placeholder="e.g. Kenya"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
							<span className="col-span-12 md:col-span-3 flex border border-gray-700 rounded-md h-12">
								<input
									type="text"
									value=""
									name="name"
									id="name"
									placeholder="e.g. Nairobi"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
							<span className="col-span-12 md:col-span-3 flex border border-gray-700 rounded-md h-12">
								<input
									type="text"
									value=""
									name="name"
									id="name"
									placeholder="Address"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
							<span className="col-span-12 md:col-span-3 flex border border-gray-700 rounded-md h-12">
								<input
									type="text"
									value=""
									name="name"
									id="name"
									placeholder="e.g -51,54"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
						</div>
						<label htmlFor="name">Other Details</label>
						<div className="grid grid-cols-12 gap-4">
							<span className="col-span-6 flex border border-gray-700 rounded-md h-12">
								<input
									type="number"
									value=""
									name="number"
									id="name"
									placeholder="Price per Night"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
							<span className="col-span-6 flex border border-gray-700 rounded-md h-12">
								<input
									type="number"
									value=""
									name="number"
									id="name"
									placeholder="Max Guest"
									className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
								/>
							</span>
						</div>
						<label htmlFor="name">Images</label>
						<span className="flex border border-gray-400 rounded-md h-72 w-full">
							<textarea
								type="text"
								value=""
								name="name"
								id="name"
								placeholder="Property Description"
								className="flex flex-col items-center justify-center outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
							/>
						</span>
					</div>
					<div className="col-span-6 flex flex-col space-y-3">
						<label htmlFor="name">Property Amenities</label>
						<span className="flex border border-gray-700 rounded-md h-12">
							<input
								type="text"
								value=""
								name="type"
								id="type"
								placeholder="Property Amenities"
								className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
							/>
						</span>
						<label htmlFor="name">Category</label>
						<span className="flex border border-gray-700 rounded-md h-12">
							<input
								type="text"
								value=""
								name="name"
								id="name"
								placeholder="Property Category"
								className="rounded-md outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
							/>
						</span>
						<label htmlFor="name">Images</label>
						<span className="flex border-3 border-gray-400 rounded-md h-72 w-full">
							<input
								type="file"
								value=""
								name="name"
								id="name"
								placeholder="Property Category"
								className="flex flex-col items-center justify-center outline-none hover:outline-none w-full h-full px-3 py-1 text-gray-500 text-sm"
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ListProperty;
