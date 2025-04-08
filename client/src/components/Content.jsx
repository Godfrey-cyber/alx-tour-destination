import React from 'react';
import { showcaseContent2 } from '../utilities/utiles.js';

const Content = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen px-5 md:px-10 lg:px-20 w-full my-5 md:my-10 lg:my-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
				<div className="flex flex-col max-h-96 justify-center p-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{showcaseContent2.map(data => (
							<div
								key={data.id}
								className="relative flex flex-col space-y-4 bg-red-100 h-72 p-4 justify-center"
							>
								<p className="text-sm z-50 font-bold text-orange-600 my-4">
									{data.title}
								</p>
								<p className="text-sm z-50 font-semibold text-white my-1">
									{data.large}
								</p>
								<img
									className="absolute top-0 left-0 bottom-0 h-full w-full object-cover"
									src={data.image}
									alt=""
								/>
								<div className="overlay"></div>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col space-y-4 h-96 justify-center p-4">
					<p className="text-lg font-semibold text-orange-600">
						Welcome to Pacific
					</p>
					<p className="text-4xl font-bold text-black">
						Seamless Booking, Just a Few Clicks Away!
					</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						Planning your next adventure has never been easier! With
						our hassle-free booking feature, you can reserve your
						dream destination, hotel, or experience in just a few
						simple steps.
					</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						Whether you're booking a weekend getaway, an exciting
						tour, or a luxury stay, our platform ensures a smooth
						and effortless process from start to finish.
					</p>
					<button className="text-sm font-semibold text-white bg-orange-600 w-fit rounded-full px-6 py-3 my-4">
						Search Destination
					</button>
				</div>
			</div>
		</div>
	);
};

export default Content;
