import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FaShareNodes, FaHeart } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

import DestinationImage from '../components/DestinationImage.jsx';
import Amenities from '../components/Amenities.jsx';
import DestinationHeader from '../components/DestinationHeader.jsx';
import NewDestination from '../components/NewDestination.jsx';
import AboutProperty from '../components/AboutProperty.jsx';
import GuestReviews from '../components/GuestReviews.jsx';
import CountyData from '../components/CountyData.jsx';
import HouseRules from '../components/HouseRules.jsx';
import { axiosInstance } from '../utilities/utiles.js';
import { useDispatch, useSelector } from 'react-redux';

const TabItem = ({ label, active, onClick }) => (
	<span
		onClick={onClick}
		className={`flex text-sm justify-center cursor-pointer hover:bg-gray-200 h-full transition-all delay-300 items-center ${active ? 'border-b bg-gray-100 text-orange-600 font-semibold border-orange-600' : 'text-sm font-normal text-gray-700'}`}
	>
		<p className="">{label}</p>
	</span>
);

const Destination = () => {
	const [activeTab, setActiveTab] = useState('Overview');
	const [destination, setDestination] = useState([]);
	const [reviews, setReviews] = useState([]);
	const { id, name } = useParams();
	const { accessToken } = useSelector(state => state.auth);
	console.log(name, id);
	const path = useParams();
	console.log(path);
	useEffect(() => {
		const controller = new AbortController();
		const getdestinations = async () => {
			try {
				const res = await axiosInstance.get(
					`/destinations/destination/${id}`,
					{
						signal: controller.signal,
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);
				if (res.status === 200) {
					setDestination(res.data.result);
					console.log('Fetched destination:', res.data.result);
				}
			} catch (error) {
				if (error.code === 'ERR_CANCELED') {
					console.log('Request canceled');
				} else if (error.response && error.response.status === 401) {
					console.log('User not authenticated', error);
				} else {
					console.log('Error fetching destination:', error);
				}
			}
		};
		getdestinations();
		return () => controller.abort();
	}, [id, accessToken]);

	useEffect(() => {
		if (destination) {
			console.log('Destination updated:', destination);
		}
	}, [destination]);

	useEffect(() => {
		const controller = new AbortController();
		const getReviews = async () => {
			try {
				const res = await axiosInstance.get(
					`/reviews/destination-reviews/${id}`,
					{
						///68415770a8e0cc6cef30faa7
						signal: controller.signal,
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);
				if (res.status === 200) {
					setReviews(res.data.reviews);
				}
			} catch (error) {
				// Prefer error.code === "ERR_CANCELED" for Axios v1+
				if (error.code === 'ERR_CANCELED') {
					console.log('Request canceled');
				} else if (error.response && error.response.status === 401) {
					console.log('User not authenticated', error);
				} else {
					console.log('Error fetching reviews:', error);
				}
			}
		};
		getReviews();
		return () => controller.abort();
	}, [id, accessToken, setReviews]);

	useEffect(() => {
		if (reviews) {
			console.log('Reviews updated:', reviews);
		}
	}, [reviews]);

	const tabs = [
		'Overview',
		'Apartment Info & Price',
		'Facilities',
		'House Rules',
		'Fine Prints',
		'Guests reviews (130)',
	];
	return (
		<section className="flex font-normal flex-col h-full w-full bg-white">
			<DestinationHeader />
			<div className="flex items-center h-18">
				<div className="grid grid-cols-6 border-b border-gray-300 w-full lg:w-9/10 mx-auto h-full">
					{tabs.map(tab => (
						<TabItem
							key={tab}
							label={tab}
							active={tab === activeTab}
							onClick={() => setActiveTab(tab)}
						/>
					))}
				</div>
			</div>
			<div className="flex justify-between px-20 h-18 my-4 bg-white">
				<div className="flex flex-col space-y-2">
					<p className="text-xl text-gray-800 font-bold">
						{destination.title}
					</p>
					<span className="flex space-x-2">
						<IoLocationOutline className="h-5 w-5 text-orange-500" />
						<span className="flex items-center space-x-2 text-sm  text-gray-700">
							{destination.location?.city} -{' '}
							{destination.location?.address}{' '}
							{destination.location?.city},{' '}
							{destination.location?.country} –{' '}
							<p className="text-orange-600 font-semibold cursor-pointer">
								{' '}
								Great location - show map
							</p>{' '}
						</span>
					</span>
				</div>
				<span className="flex items-center space-x-5">
					<FaShareNodes className="h-5 w-5 text-orange-500 cursor-pointer" />
					<FaHeart className="h-5 w-5 text-orange-500 cursor-pointer" />
					<button className="text-sm text-white font-normal rounded-lg bg-orange-600 px-4 py-2 cursor-pointer">
						Reserve your appartment stay
					</button>
				</span>
			</div>
			{/*<DestinationImage destination={destination} />*/}
			<NewDestination destination={destination} />
			{/*<Amenities destination={destination} />*/}
			<AboutProperty />
			<GuestReviews reviews={reviews} />
			<HouseRules />
			<CountyData />
		</section>
	);
};

export default Destination;
