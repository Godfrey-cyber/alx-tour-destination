import React from 'react';

const DestinationImage = ({ destination }) => {
	console.log(destination?.images);
	console.log(destination);
	return (
		<section className="flex flex-col space-y-3 w-full my-2 h-full md:px-10 lg:px-20">
			<div className="grid grid-cols-12 gap-x-2 w-full h-full">
				<div className="col-span-6 flex-col bg-red-200 rounded-md h-96">
					<span className="flex h-full w-full">
						<img
							src={destination?.images?.[0]}
							alt=""
							className="h-full w-full rounded-md"
						/>
					</span>
				</div>
				<div className="col-span-3 flex flex-col justify-between space-y-2 rounded-md h-full">
					<span className="flex h-48 w-full rounded-md">
						<img
							src={destination?.images?.[1]}
							alt=""
							className="h-full w-full rounded-md bg-pink-200"
						/>
					</span>
					<span className="flex h-46 w-full rounded-md">
						<img
							src={destination?.images?.[2]}
							alt=""
							className="h-full w-full rounded-md bg-pink-200"
						/>
					</span>
				</div>
				<div className="col-span-3 flex-col bg-white"></div>
			</div>
			<div className="grid grid-cols-5 gap-x-2 h-20">
				{destination &&
					destination?.images?.map(image => (
						<img
							src={image}
							key={image}
							alt=""
							className="h-full w-full rounded-sm bg-pink-200"
						/>
					))}
			</div>
		</section>
	);
};

export default DestinationImage;
