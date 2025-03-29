import React from 'react'
import Showcase from "../components/Showcase.jsx"
import Content from "../components/Content.jsx"
import Destinations from "../components/Destinations.jsx"
import Tours from "../components/Tours.jsx"
import Offers from "../components/Offers.jsx"
import Discounts from "../components/Discounts.jsx"
import Footer from "../components/Footer.jsx"

const Home = () => {
	return (
		<section className="w-full h-full bg-transparent">
			<Showcase />
			{/*<Content />*/}
			<Offers />
			<Destinations />
			<Discounts />
			<Tours />
			<Footer />
		</section>
	)
}

export default Home