import React from 'react'
import { useParams } from 'react-router-dom'
import DestinationHeader from "../components/DestinationHeader.jsx"
import DestByCity from "../components/DestByCity.jsx"
import CityFilter from "../components/CityFilter.jsx"

const CityDestinations = () => {
	const { cityName } = useParams()
	return (
		<section className="flex font-normal flex-col h-full w-full bg-white">
			<DestinationHeader />
			<div className="grid grid-cols-12 gap-4 px-5 md:px-10 lg:px-20 my-8">
				<CityFilter />
				<DestByCity />
			</div>
		</section>
	)
}

export default CityDestinations