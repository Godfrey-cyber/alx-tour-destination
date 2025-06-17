import React, { useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../utilities/utiles.js';

const AddDestination = () => {
	const [reviewInfo, setReviewInfo] = useState({ rating: '', comment: '' });
	const [toggle, setToggle] = useState(false);
	const { rating, comment } = reviewInfo;

	const onChange = event => {
		setReviewInfo(prev => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = async event => {
		event.preventDefault();
		// dispatch(loginStart());
		if (rating && comment) {
			try {
				const res = await axiosInstance.post(
					'/reviews/add-review',
					reviewInfo
				);
				if (res.status === 200 || res.statusText === 'OK') {
					// dispatch(loginSuccess(res.data));
					setReviewInfo({ rating: '', comment: '' });
					// navigate('/home');
					console.log(res);
					// toast.success("Successfully Logged in🥇")
				}
			} catch (err) {
				if (err || !res.status === 200 || !res.statusText === 'OK') {
					// dispatch(loginFailure(err?.response?.data.msg));
					setReviewInfo({ rating: '', comment: '' });
					// toast.error(err?.response?.data?.msg)
					console.log(err);
				}
			}
		} else {
			// toast.error('Soory! • Cannot log you without credentials')
			console.log('error', error);
		}
	};

	return (
		<div className="flex flex-col bg-white min-h-screen justify-center items-center w-full px-5 md:px-10 lg:px-20">
			<div className="flex flex-col space-y-6 h-full lg:h-92 w-full lg:w-1/3">
				<div className="flex flex-col space-y-3">
					<p className="text-lg font-bold text-amber-400">
						Login and start booking
					</p>
					<p className="text-sm font-normal text-gray-600">
						You can Login using your Pacific.com account to access
						our services.
					</p>
				</div>
				<div className="flex flex-col space-y-6">
					<form
						// onSubmit={handleLogin}
						action=""
						className="flex flex-col space-y-2"
					>
						<label htmlFor="rating">Rating</label>
						{/*<span className="">*/}
						<input
							onChange={onChange}
							type="number"
							value={rating}
							name="rating"
							id="rating"
							placeholder="Rating"
							className="border border-gray-400 outline-none hover:outline-none w-full h-9 px-3 py-1 text-gray-500 text-sm"
						/>
						{/*</span>*/}
						<label htmlFor="comment">Comment</label>
						<textarea
							onChange={onChange}
							type="text"
							value={comment}
							name="comment"
							id="comment"
							placeholder="Write your Review"
							className="border border-gray-400 outline-none hover:outline-none w-full h-16 max-h-28 px-3 py-1 text-gray-500 text-sm"
						/>
						<button
							onClick={handleSubmit}
							type="submit"
							// disabled={loading}
							className="bg-orange-400 text-white rounded-md text-xs font-semibold w-full h-9 px-3 py-2 cursor-pointer"
						>
							{/*{loading ? 'Logging in...' : 'SUBMIT'}*/} Submit
						</button>
						<div className="flex items-center text-xs text-gray-400 justify-self-center">
							Don't have an account?
							<span
								onClick={() => navigate('/signup')}
								className="cursor-pointer text-orange-400 hover:font-semibold transition-all delay-200 ml-2"
							>
								SignUp here
							</span>
						</div>
					</form>
					<div className="flex space-x-2 items-center my-4 w-full justify-center">
						<span className="h-0.25 bg-gray-300 w-1/5"></span>
						<p className="text-xs font-normal text-gray-600">
							or use one of these options
						</p>
						<span className="h-0.25 bg-gray-300 w-1/5"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddDestination;
