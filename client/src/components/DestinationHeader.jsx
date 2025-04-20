import React from 'react'
import { MdOutlineChevronLeft, MdAirportShuttle } from 'react-icons/md';
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { PiAirplaneInFlightLight } from "react-icons/pi";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { TbWindmill } from "react-icons/tb";
import { FaShareNodes, FaHeart } from "react-icons/fa6";

const NavItem = ({ icon: Icon, label }) => (
  <span className="active:bg-orange-300 rounded-full space-x-2 cursor-pointer hover:bg-amber-300 px-3 py-2 active:border border-white flex items-center justify-center">
    <Icon className="h-5 w-5 text-white" />
    <p className="text-xs font-semibold text-white">{label}</p>
  </span>
);

const DestinationHeader = () => {
	return (
		<div className="h-36 w-full bg-orange-500 flex items-center justify-between px-5 md:px-10 lg:px-20">
			<div className="flex flex-col space-y-3">
				<h3 className="text-white text-2xl font-bold">Pacific Travels</h3>
				<div className="flex items-center space-x-5">
					<NavItem icon={IoBedOutline} label="Stays" />
		            <NavItem icon={PiAirplaneInFlightLight} label="Flights" />
		            <NavItem icon={BsFillTaxiFrontFill} label="Car Rentals" />
		            <NavItem icon={TbWindmill} label="Experiences" />
		            <NavItem icon={MdAirportShuttle} label="Airport taxis" />
				</div>
			</div>
			<div className="flex items-center space-x-3">
				<p className="text-sm font-semibold text-white cursor-pointer">List your property</p>
				<div className="flex items-center space-x-1">
					<span className="flex items-center justify-center font-semibold text-sm bg-white rounded-full h-8 w-8">N</span>
					<span className="flex flex-col space-y-1">
						<p className="text-xs font-semibold text-white">Ndiritu Godfrey</p>
						<p className="text-xs font-normal text-blue-500">Genius Level 1</p>
					</span>
				</div>
			</div>
		</div>
	)
}

export default DestinationHeader