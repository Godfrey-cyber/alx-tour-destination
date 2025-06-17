import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { LuLogIn } from 'react-icons/lu';
import { TbLogout2 } from 'react-icons/tb';
import { RxCrossCircled } from 'react-icons/rx';
import { FaChildren, FaChild } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';

const HouseRules = () => {
	return (
		<div className="w-full gap-4 lg:px-20 md:px-10 px-5">
			<p className="flex flex-col text-xl font-bold text-gray-700 mt-6 space-y-4">
				House Rules.
			</p>
			<p className="flex flex-col text-sm font-normal text-gray-600">
				El Sueno Homestay takes special requests – add in the next
				step!.
			</p>
			<div className="flex flex-col rounded-md border border-gray-300 divide-y-1 divide-gray-200 p-4 my-6 h-fit">
				<div className="flex items-center space-x-5 py-3 w-full">
					<span className="flex space-x-2 items-center w-1/4">
						<LuLogIn className="h-8 w-8 text-orange-500" />
						<p className="text-sm font-semibold text-gray-800">
							Check-in
						</p>
					</span>
					<p className="text-sm font-normal text-gray-600 w-4/5">
						Available 24 hours
					</p>
				</div>
				<div className="flex items-center space-x-5 py-3 w-full">
					<span className="flex space-x-2 items-center w-1/4">
						<TbLogout2 className="h-8 w-8 text-orange-500" />
						<p className="text-sm font-semibold text-gray-800">
							Check-out
						</p>
					</span>
					<p className="text-sm font-normal text-gray-600 w-4/5">
						Until 10:00 AM.
					</p>
				</div>
				<div className="flex items-center space-x-5 py-3 w-full">
					<span className="flex space-x-2 items-center w-1/4">
						<RxCrossCircled className="h-8 w-8 text-orange-500" />
						<p className="text-sm font-semibold text-gray-800">
							Cancellation/ prepayment
						</p>
					</span>
					<p className="text-sm font-normal text-gray-600 w-4/5">
						Cancellation and prepayment policies vary according to
						accommodation type. Enter your stay dates and check the
						conditions of your selected option.
					</p>
				</div>
				<div className="flex items-center space-x-5 py-3 w-full">
					<span className="flex space-x-2 items-center w-1/4">
						<FaChildren className="h-8 w-8 text-orange-500" />
						<p className="text-sm font-semibold text-gray-800">
							Children & Beds
						</p>
					</span>
					<p className="text-sm font-normal text-gray-600 w-4/5">
						Children of all ages are welcome. To see correct prices
						and occupancy info, add the number and ages of children
						in your group to your search. Cribs and extra beds
						aren't available at this property.
					</p>
				</div>
				<div className="flex items-center space-x-5 py-3 w-full">
					<span className="flex space-x-2 items-center w-1/4">
						<FaChild className="h-8 w-8 text-orange-500" />
						<p className="text-sm font-semibold text-gray-800">
							No age restriction
						</p>
					</span>
					<p className="text-sm font-normal text-gray-600 w-4/5">
						There's no age requirement for check-in
					</p>
				</div>
				<div className="flex items-center space-x-5 py-3 w-full">
					<span className="flex space-x-2 items-center w-1/4">
						<MdOutlinePets className="h-8 w-8 text-orange-500" />
						<p className="text-sm font-semibold text-gray-800">
							Pets
						</p>
					</span>
					<p className="text-sm font-normal text-gray-600 w-4/5">
						Pets are not allowed.
					</p>
				</div>
				<div className="flex items-center space-x-5 py-3 w-full">
					<span className="flex space-x-2 items-center w-1/4">
						<BsCashCoin className="h-8 w-8 text-orange-500" />
						<p className="text-sm font-semibold text-gray-800">
							Cash only
						</p>
					</span>
					<p className="text-sm font-normal text-gray-600 w-4/5">
						This property only accepts cash payments.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HouseRules;
