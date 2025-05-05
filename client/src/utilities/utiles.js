import axios from 'axios';
export const axiosInstance = axios.create({
	baseURL: 'https://alx-tour-destination.onrender.com/api/v1', // api base url
	// https://alx-tour-destination.onrender.com
	withCredentials: true, // Allows cookies (refresh token)
});

export const showcaseContent = [
	{
		id: 1,
		title: 'Welcome to Pacific',
		large: 'Discover Your Favorite Place with Us',
		image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424',
		small: 'Travel to the any corner of the world, without going around in circles',
	},
	{
		id: 2,
		title: 'Welcome to Pacific',
		large: 'Discover places in Bali, Indonesia',
		image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		small: 'Travel to the any corner of the world, without going around in circles',
	},
	{
		id: 3,
		title: 'Welcome to Pacific',
		large: 'Explore Places in Singapore',
		image: 'https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg',
		small: 'Travel to the any corner of the world, without going around in circles',
	},
	{
		id: 4,
		title: 'Welcome to Pacific',
		large: 'Explore Maldives',
		image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		small: 'Travel to the any corner of the world, without going around in circles',
	},
];

export const showcaseContent2 = [
	{
		id: 1,
		title: 'Activities',
		large: 'A small river named Duden flows by their place and supplies it with the necessary',
		image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424',
	},
	{
		id: 2,
		title: 'Travel Arrangements',
		large: 'A small river named Duden flows by their place and supplies it with the necessary',
		image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 3,
		title: 'Location Manager',
		large: 'A small river named Duden flows by their place and supplies it with the necessary',
		image: 'https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg',
	},
	{
		id: 4,
		title: 'Private Guide',
		large: 'A small river named Duden flows by their place and supplies it with the necessary',
		image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
];

export const destinations = [
	{
		id: 1,
		country: 'Greece',
		tours: 7,
		image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424',
	},
	{
		id: 2,
		country: 'Philipines',
		tours: 2,
		image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 3,
		country: 'Kenya',
		tours: 4,
		image: 'https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg',
	},
	{
		id: 4,
		country: 'Thailand',
		tours: 10,
		image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
];

export const tours = [
	{
		id: 1,
		country: 'Bali, Indonesia',
		duration: 7,
		price: 500,
		bathtab: 3,
		vicinity: 'Beach',
		bed: 4,
		image: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424',
	},
	{
		id: 2,
		country: 'Philipines',
		duration: 2,
		price: 300,
		bathtab: 3,
		vicinity: 'Desert',
		bed: 4,
		image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 3,
		country: 'Kenya',
		duration: 4,
		price: 400,
		bathtab: 3,
		vicinity: 'Highland',
		bed: 4,
		image: 'https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg',
	},
	{
		id: 4,
		country: 'Thailand',
		duration: 10,
		price: 200,
		bathtab: 3,
		vicinity: 'Mountain',
		bed: 4,
		image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
];
