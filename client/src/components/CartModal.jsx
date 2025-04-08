import { motion } from 'framer-motion';
import React, { useState } from 'react';

const CartModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	return (
		<div>
			{isOpen && (
				<div
					className="fixed inset-0 bg-faint-black bg-opacity-50 z-40"
					onClick={onClose}
				/>
			)}

			{/* Sliding Cart */}
			<motion.div
				initial={{ x: '100%' }}
				animate={{ x: isOpen ? '0%' : '100%' }}
				transition={{ type: 'spring', stiffness: 100 }}
				className="flex flex-col fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-52 p-5 flex flex-col"
			>
				<div className="flex justify-between items-center border-b pb-3">
					<div className="flex flex-col group cursor-pointer">
						<p className="text-2xl font-bold text-black group-hover:text-orange-500 transition-all delay-300">
							Pacific
						</p>
						<p className="text-xs font-semibold text-orange-500 group-hover:text-white transition-all delay-300">
							TRAVEL AGENCY
						</p>
					</div>
					<button
						className="text-white bg-amber-500 border border-amber-500 rounded-full flex items-center justify-center w-8 h-8 text-lg font-semibold cursor-pointer hover:text-gray-900"
						onClick={onClose}
					>
						&times;
					</button>
				</div>

				{/* Cart Items */}
				<div className="flex-1 overflow-y-auto mt-4 justify-center items-center h-full"></div>

				{/* Checkout Button */}
			</motion.div>
		</div>
	);
};

export default CartModal;
