import React, { useState, useEffect } from 'react'
import showcaseImage from '../assets/download.jpeg';
import Header from "./Hearder.jsx"
import SearchBar from "./SearchBar.jsx"
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { showcaseContent } from "../utilities/utiles.js"
import { LazyLoadImage } from "react-lazy-load-image-component";


const Showcase = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseContent.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	const nextProduct = () => {
	    setCurrentIndex((prev) => (prev + 1) % showcaseContent.length);
	};

	const prevProduct = () => {
	    setCurrentIndex((prev) => (prev - 1 + showcaseContent.length) % showcaseContent.length);
	};
	return (
		<div className="flex w-full h-screen flex flex-col relative">
		    <Header />
			<AnimatePresence mode="wait" className="w-full h-full">
		        <motion.img
		            key={showcaseContent[currentIndex]?.id}
		            src={showcaseContent[currentIndex]?.image}
		            alt={showcaseContent[currentIndex]?.large}
		            className="w-full h-full object-cover bg-fixed"
		            initial={{ opacity: 0, x: 50 }}
		            animate={{ opacity: 1, x: 0 }}
		            exit={{ opacity: 0, x: -50 }}
		            transition={{ duration: 0.5 }}
		            effect="blur"
		        />
	        </AnimatePresence>
	        <div className="overlay transition-all delay-300"></div>
	        <div className="mt-5 flex space-x-6 items-center">
	        	<span onClick={prevProduct} className="absolute top-1/2 bottom-1/2 transform -translate-y-1/2 translate-x-1/2 left-2 z-50 flex justify-center items-center bg-white text-white rounded-full w-10 h-10 hover:bg-amber-400 transition-all delay-300 cursor-pointer">
		         	<MdOutlineChevronLeft className="h-5 w-5 text-gray-500" />
		        </span>
		        <span onClick={nextProduct} className="absolute top-1/2 bottom-1/2 transform -translate-y-1/2 -translate-x-1/2 right-2 z-50 flex justify-center items-center bg-white text-white rounded-full w-10 h-10 hover:bg-amber-400 transition-all delay-300 cursor-pointer">
		          	<MdOutlineChevronRight className="h-5 w-5 text-gray-500" />
		        </span>
	      	</div>
	      	<div className="mt-5 flex items-center space-x-2 absolute left-1/2 bottom-25 lg:bottom-18 transform -translate-x-1/2 z-50">
		        {showcaseContent.map((_, index) => (
		          	<button key={index} onClick={() => setCurrentIndex(index)} className={`rounded-full border border-amber-500 ${currentIndex === index ? "bg-amber-500 w-3 h-3" : "bg-gray-100 w-2 h-2"} transition-all delay-300`}
		          	></button>
		        ))}
	      	</div>
	      	<div className="flex flex-col lg:justify-start justify-center lg:items-start items-center space-y-3 absolute top-1/2 bottom-1/2 transform -translate-y-1/2 translate-x-1/2 left-2 z-50 w-1/2 lg:w-1/3">
	      		<h2 className="text-lg lg:text-start text-center text-orange-500 font-semibold">{showcaseContent[currentIndex]?.title}</h2>
	      		<p className="text-4xl lg:text-start text-center text-white font-bold">{showcaseContent[currentIndex]?.large}</p>
	      		<p className="text-sm lg:text-start text-center text-white font-semibold">{showcaseContent[currentIndex]?.small}</p>
	      	</div>
	      	<SearchBar />
		</div>
	)
}

export default Showcase