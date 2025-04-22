import React from 'react'

const NewDestination = ({ destination }) => {
	console.log(destination?.images)
	console.log(destination)
	return (
		<section className="flex flex-col space-y-3 w-full my-2 h-full md:px-10 lg:px-20">
			<div className="grid grid-cols-12 h-full w-full border-gray-300 gap-x-2 border-4">
				{/* large image + small image*/}
				<div className="flex flex-col space-y-2 col-span-8 h-full w-full">
					<div className="grid grid-cols-12 gap-x-2 h-full">
						{/*<div className="bg-amber-400">Hello span left</div>*/}
						<span className="flex flex-col col-span-8 h-full w-full">
							<img src={destination?.images?.[0]} alt="" className="h-full w-full rounded-md" />
						</span>
						<div className="flex flex-col col-span-4 space-y-3 h-full bg-red-400">
							<span className="flex h-48 w-full rounded-md">
								<img src={destination?.images?.[1]} alt="" className="h-full w-full rounded-md bg-pink-200" />
							</span>
							<span className="flex h-46 w-full rounded-md">
								<img src={destination?.images?.[2]} alt="" className="h-full w-full rounded-md bg-pink-200" />
							</span>
						</div>
					</div>
					<div className="grid grid-cols-5 gap-x-2 ">
						{destination && destination?.images?.map(image => (
							<img src={image} key={image} alt="" className="h-full w-full rounded-sm bg-pink-200" />
						))}
					</div>
				</div>

				<div className="flex flex-col col-span-4 h-96 bg-blue-400 w-full">
					<div className="bg-amber-400">Hello span top</div>
					<div className="bg-red-400">Hello span bottom</div>
				</div>
				{/*<div className="grid grid-cols-5 gap-x-2">
					{destination && destination?.images?.map(image => (
						<img src={image} key={image} alt="" className="h-full w-full rounded-sm bg-pink-200" />
					))}
				</div>*/}
			</div>
			<div className="grid grid-cols-5 gap-3 my-4">
				{destination?.amenities?.map(item => (
					<span key={item} className="flex items-center space-x-2 border border-gray-300 rounded-sm px-3 py-4">
						<p className="text-xs font-semibold text-gray-700">{item}</p>
					</span>
				))}
			</div>
		</section>
	)
}

export default NewDestination