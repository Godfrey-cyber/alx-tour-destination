import React from 'react';

const About = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full px-5 md:px-10 lg:px-20 w-full my-20 md:my-10 lg:my-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full h-full">
				<div className="flex flex-col space-y-4 h-full justify-center p-4">
					<p className="text-lg font-semibold text-orange-600">
						Welcome to Pacific
					</p>
					<p className="text-4xl font-bold text-black">About Us</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						The idea for Pacific was born out of a personal travel
						experience that highlighted just how frustrating and
						time-consuming booking a trip can be. In [Year], our
						team of passionate developers and travel enthusiasts set
						out to create a platform that simplifies the
						process—making it faster, easier, and more enjoyable for
						everyone.
					</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						From countless hours of research to multiple iterations,
						this project has been a journey of learning and
						innovation. As part of our ALX Portfolio Project, we
						aimed to build something practical and impactful. You
						can check out my project submission here:
					</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						https://alx-tour-destination.vercel.app.
					</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						https://github.com/Godfrey-cyber/alx-tour-destination
					</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						https://www.linkedin.com/in/godfrey-ndiritu-913585144.
					</p>
					<p className="text-sm font-normal text-gray-500 my-4">
						x.com/godfrey_ndiritu
					</p>
					<button className="text-sm font-semibold text-white bg-orange-600 w-fit rounded-full px-6 py-3 my-4">
						Search Destination
					</button>
				</div>
				<div className="flex flex-col h-full w-full justify-center p-4">
					{/*<div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
					{/*<div className="relative flex flex-col space-y-4 bg-red-100 h-72 p-4 justify-center">*/}
					{/*<p className="text-sm z-50 font-bold text-orange-600 my-4">{data.title}</p>*/}
					{/*<p className="text-sm z-50 font-semibold text-white my-1">{data.large}</p>*/}
					<img
						className="h-full w-full object-cover border-t-4 border-orange-600"
						src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
					{/*<div className="overlay"></div>*/}
					{/*</div>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	);
};

export default About;
