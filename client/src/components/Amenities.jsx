import React from 'react'

const Amenities = ({ destination }) => {
	return (
		<div className="grid grid-cols-5 gap-3 px-20 my-4">
			{destination?.amenities?.map(item => (
				<span key={item} className="flex items-center space-x-2 border border-gray-300 rounded-sm">
					<p className="text-sm font-normal text-gray-700">item</p>
				</span>
			))}
		</div>
	)
}

export default Amenities