import React from 'react'

const GuestReviews = ({ reviews }) => {
	console.log(reviews)
	const items = reviews.map(x => console.log(x))
	console.log(items)
	return (
		<div className='w-full gap-4 lg:px-20 md:px-10 px-5'>
			<p className="flex flex-coltext-xl font-bold text-gray-700 my-6 space-y-4">Guest Reviews.</p>
			<div className="flex items-center space-x-6 my-3">
				<span className="flex items-center justify-center h-12 w-12 bg-blue-600 rounded-tl-sm rounded-br-sm">
					<p className="text-sm text-white">8.4</p>
				</span>
				<p className="text-sm">Very Good 15 · Reviews <span className="hover:text-underline text-blue-400 font-normal text-sm"> Read all Reviews</span></p>
			</div>
			<div className="grid grid-cols-12 gap-4">
				{reviews.map(item => ( 
					<div key={item._id} className="col-span-12 lg:col-span-4 rounded-md border border-gray-200 flex flex-col p-4">
						<div className="flex flex-col space-y-3">
							<span className="flex items-center justify-center h-12 w-12 rounded-full text-sm text-white text-xl bg-green-700 font-normal">{item.user.firstName.charAt(0)}</span>
							<span className="text-sm font-normal text-blue-400">
								<p className="text-sm font-semibold text-gray-800">{item.user.firstName}</p>
								<p className="text-xs font-light text-gray-500">{item.rating}</p>
							</span>
						</div>
						<p className="text-xs font-normal">“{item.comment}”</p>
						<p className="text-sm font-normal text-blue-400 my-2">Read more</p>
					</div>
				))}
				{/*<div className="col-span-12 lg:col-span-4 rounded-md border border-gray-200 flex flex-col p-4">
					<div className="flex flex-col space-y-3">
						<span className="flex items-center justify-center h-12 w-12 rounded-full text-sm text-white text-xl bg-green-700 font-normal">C</span>
						<span className="text-sm font-normal text-blue-400">
							<p className="text-sm font-semibold text-gray-800">Chepkoech</p>
							<p className="text-xs font-light text-gray-500">Sweden</p>
						</span>
					</div>
					<p className="text-xs font-normal">“Everything! The central location, the restaurant food and the swimming pool. The close proximity to the malls and west lands Centre and the CBD is also a plus. The room is very comfortable. I would say I got value for my money. I would definately...”</p>
					<p className="text-sm font-normal text-blue-400 my-2">Read more</p>
				</div>
				<div className="col-span-12 lg:col-span-4 rounded-md border border-gray-200 flex flex-col p-4">
					<div className="flex flex-col space-y-3">
						<span className="flex items-center justify-center h-12 w-12 rounded-full text-sm text-white text-xl bg-green-700 font-normal">N</span>
						<span className="text-sm font-normal text-blue-400">
							<p className="text-sm font-semibold text-gray-800">Ngeno</p>
							<p className="text-xs font-light text-gray-500">China</p>
						</span>
					</div>
					<p className="text-xs font-normal">“The place was really tranquil and quiet. They have a swimming pool which is very clean. They also have a restaurant in the building and the meals are affordable. The host was also very kind. Would most likely come back again and again. Asante!”</p>
					<p className="text-sm font-normal text-blue-400 my-2">Read more</p>
				</div>*/}
			</div>
		</div>
	)
}

export default GuestReviews
