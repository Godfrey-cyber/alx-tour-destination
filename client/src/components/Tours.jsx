import React from 'react';
import { useNavigate } from 'react-router-dom'
import { tours } from '../utilities/utiles.js';

const cities = [
  { name: 'Nairobi', image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424' },
  { name: 'Mombasa', image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Cape Town', image: 'https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg' },
  { name: 'Lagos', image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Kigali', image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424' },
]

const Tours = () => {
	const navigate = useNavigate()

	const handleCityClick = (cityName) => {
	    navigate(`/destinations/city/${cityName}`)
	}
	return (
		<div className="w-full h-fit lg:min-h-screen flex flex-col justify-center items-center px-5 md:px-10 lg:px-30 my-6">
			<span className="flex flex-col items-center space-y-4 my-3">
				<p className="text-lg font-semibold text-orange-600">
					Destination
				</p>
				<p className="text-4xl text-black font-bold">
					Tour Destinations
				</p>
			</span>
			<div className="flex flex-col space-y-3 my-6 w-full">
				<div className="grid grid-cols-12 gap-2">
					{cities.slice(0, 2).map(city => (
						<div
							onClick={() => handleCityClick(city.name)}
							key={city.name}
							className="lg:col-span-6 col-span-12 relative group flex flex-col space-y-4 h-36 bg-red-100 h-72 p-4 justify-center rounded-md hover:border-2 border-amber-300"
						>
							<img
								className="absolute rounded-md top-0 left-0 bottom-0 h-full w-full object-cover"
								src={city.image}
								alt=""
							/>
							<p className="absolute z-40 top-10 left-10 text-2xl font-bold text-white">{city.name}</p>
							<div className="overlay rounded-md"></div>
						</div>
					))}
				</div>
				<div className="grid grid-cols-12 gap-2">
					{cities.slice(2, 5).map(city => (
						<div
							onClick={() => handleCityClick(city.name)}
							key={city.name}
							className="lg:col-span-4 col-span-12 relative group flex flex-col space-y-4 h-36 bg-red-100 h-72 p-4 justify-center rounded-md hover:border-2 border-amber-300"
						>
							<img
								className="absolute rounded-md top-0 left-0 bottom-0 h-full w-full object-cover"
								src={city.image}
								alt=""
							/>
							<p className="absolute z-40 top-10 left-10 text-2xl font-bold text-white">{city.name}</p>
							<div className="overlay rounded-md"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tours;
