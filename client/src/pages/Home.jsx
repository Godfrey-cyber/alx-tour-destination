import React from 'react'
import Showcase from "../components/Showcase.jsx"
import Content from "../components/Content.jsx"
import Destinations from "../components/Destinations.jsx"

const Home = () => {
	return (
		<section className="w-full min-h-screen bg-transparent">
			<Showcase />
			<Content />
			<Destinations />
		</section>
	)
}

export default Home