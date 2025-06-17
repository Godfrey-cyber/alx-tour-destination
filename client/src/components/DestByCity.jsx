import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../utilities/utiles.js';
import { useNavigate } from 'react-router-dom';

const DestByCity = () => {
	const { cityName } = useParams();
	const [destinations, setDestinations] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchDestinations = async () => {
			const { data } = await axiosInstance.get(
				`/destinations/city-destinations/${cityName}`
			);
			setDestinations(data.cities);
			console.log(destinations, data);
		};
		fetchDestinations();
	}, [cityName]);
	return (
		<div className="col-span-12 md:col-span-9 h-20 rounded-md p-3">
			<div className="grid grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{!destinations
					? 'No Destinations'
					: destinations?.map(data => (
							<div
								key={data._id}
								onClick={() =>
									navigate(
										`/destination/${data._id}/${data.slug}`
									)
								}
								className="relative group flex flex-col space-y-4 h-96 justify-center rounded-lg rounded-lg border border-gray-300 cursor-pointer"
							>
								<p className="absolute left-1/2 bg-orange-500 px-6 py-1 top-0 transform -translate-x-1/2 z-50 text-sm z-50 font-bold text-white rounded-bl-2xl rounded-br-2xl">
									{data.location.country}
								</p>
								{data?.images && data.images.length > 1 && (
									<img
										className="rounded-tl-lg rounded-tr-lg w-full object-cover h-72"
										src={data.images[1]}
										alt=""
									/>
								)}
								{/*<div className="overlay rounded-tl-lg rounded-tr-lg"></div>*/}
								<div className="flex flex-col space-y-3 p-4">
									<p className="text-sm text-gray-700 font-semibold">
										{data.title}
									</p>
									<span className="flex space-x-4 items-center justify-between">
										<p className="text-sm text-blue-600 font-semibold">
											{data.location.city}
										</p>
										<p className="text-xs text-blue-600 font-semibold">
											Show on Map
										</p>
									</span>
									<p className="text-xs text-gray-700 font-normal">
										9.3 Km from downtown
									</p>
									<p className="text-xs text-gray-700 font-normal">
										{data.description}
									</p>
								</div>
							</div>
						))}
			</div>
		</div>
	);
};

export default DestByCity;
