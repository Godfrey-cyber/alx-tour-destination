import React from 'react'

const GuestReviews = () => {
	return (
		<div className='w-full gap-4 lg:px-20 md:px-10 px-5'>
			<p className="text-xl font-bold text-gray-700 my-6 space-y-4">Guest Reviews.</p>
			<div className="flex items-center space-x-6">
				<span className="h-6 w-6 bg-blue-500 rounded-tl-sm rounded-br-sm">
					<p className="text-sm text-white">8.4</p>
				</span>
				<p className="text-sm">Very Good 15 · Reviews <span className="hover:text-underline text-blue-400 font-normal text-sm">Read all Reviews</span></p>
			</div>
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-12 lg:col-span-4 rounded-md border border-gray-200 flex flex-col p-4">
					<div className="flex items-center space-x-3">
						<p className="text-xs font-normal">“So clean and staff were friendly. Securiry is the best. The have nice restaurant too”</p>
						<p className="text-sm font-normal text-blue-400">Read more</p>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4 rounded-md border border-gray-200 flex flex-col p-4">
					<div className="flex items-center space-x-3">
						<p className="text-xs font-normal">“Everything! The central location, the restaurant food and the swimming pool. The close proximity to the malls and west lands Centre and the CBD is also a plus. The room is very comfortable. I would say I got value for my money. I would definately...”</p>
						<p className="text-sm font-normal text-blue-400">Read more</p>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4 rounded-md border border-gray-200 flex flex-col p-4">
					<div className="flex items-center space-x-3">
						<p className="text-xs font-normal">“The place was really tranquil and quiet. They have a swimming pool which is very clean. They also have a restaurant in the building and the meals are affordable. The host was also very kind. Would most likely come back again and again. Asante!”</p>
						<p className="text-sm font-normal text-blue-400">Read more</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GuestReviews
