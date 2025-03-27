import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Login = () => {
	return (
		<div className="px-5 md:px-10 lg:px-20 ">
			<p className="text-sm font-semibold text-green-400">Login Page</p>
			<LazyLoadImage src="https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" effect="blur" className="w-full h-64 object-cover rounded-md" />
		</div>
	)
}

export default Login



function TourCard({ image, title }) {
  return (
    <div className="shadow-lg p-4 rounded-lg">
      
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
    </div>
  );
}