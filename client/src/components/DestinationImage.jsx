import React from 'react'

const DestinationImage = ({ destination }) => {
	console.log(destination?.images)
	console.log(destination)
	return (
		<section className="flex flex-col space-y-3 w-full mb-8 h-80 px-20">
			<div className="grid grid-cols-12 gap-x-2 w-full h-full">
				<div className="col-span-6 flex-col bg-red-200 rounded-md h-full">
					<span className="flex h-full w-full">
						<img src={destination?.images} alt="" className="h-full w-full rounded-md" />
					</span>
				</div>
				<div className="col-span-3 flex flex-col justify-between rounded-md h-full">
					<span className="flex h-48 w-full rounded-md">
						<img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424" alt="" className="h-full w-full rounded-md bg-pink-200" />
					</span>
					<span className="flex h-46 w-full rounded-md">
						<img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424" alt="" className="h-full w-full rounded-md bg-pink-200" />
					</span>
				</div>
				<div className="col-span-3 flex-col bg-green-200"></div>
			</div>
			<div className="grid grid-cols-5 gap-x-2 h-20">
				<img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424" alt="" className="h-full w-full rounded-sm bg-pink-200" />
				<img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424" alt="" className="h-full w-full rounded-sm bg-pink-200" />
				<img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424" alt="" className="h-full w-full rounded-sm bg-pink-200" />
				<img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424" alt="" className="h-full w-full rounded-sm bg-pink-200" />
				<img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/09/10/f2aa48e4-3f30-49c2-bb14-c023b63b924a_9ea7c6b3.jpg?itok=51BmThU7&v=1725958424" alt="" className="h-full w-full rounded-sm bg-pink-200" />
			</div>
		</section>
	)
}

export default DestinationImage