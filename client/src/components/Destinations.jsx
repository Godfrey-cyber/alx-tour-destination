import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../utilities/utiles.js';

const Destinations = () => {
	const [destinations, setDestinations] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const controller = new AbortController();
		const getdestinations = async () => {
			try {
				const res = await axiosInstance.get(
					'/destinations/all-destinations',
					{
						signal: controller.signal,
					}
				);
				if (res.status === 200) {
					setDestinations(res.data.destinations);
					console.log(destinations);
				}
			} catch (error) {
				if (error.name === 'CanceledError') {
					console.log('Request canceled');
				} else {
					console.log('User not authenticated', error);
				}
			}
		};
		getdestinations();
		return () => controller.abort();
	}, []);
	return (
		<div className="w-full min-h-screen lg:h-screen flex flex-col bg-pink-50 justify-center items-center px-5 md:px-10 lg:px-30">
			<span className="flex flex-col items-center justify-center space-y-4 my-3 w-full">
				<p className="text-lg font-semibold text-orange-600">
					Welcome to Pacific
				</p>
				<p className="text-4xl text-black font-bold text-center">
					Trending Destinations
				</p>
			</span>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 w-full">
				{!destinations
					? 'No Destinations'
					: destinations?.slice(0, 4).map(data => (
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

export default Destinations;
