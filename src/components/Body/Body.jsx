import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = () => {
	return (
		<>
			<div className="">
				<div class="bg-transparent">
					<div class="mt-24 max-w-5xl mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex ">
						<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							<span class="block mx-8 my-2">
								Wanna make real money with Web3 and the Blockchain{' '}
							</span>
							<span class="block mx-8 text-indigo-600">
								Start your free trial by clicking the button below.
							</span>
						</h2>
					</div>
					<div class="max-w-xl mx-auto lg:px-8 lg:flex">
						<div class="inline-flex mx-24 mt-3 rounded-md shadow">
							<Link to="/funding-page">
								<button
									href="#"
									class="inline-flex items-center justify-center lg:px-24 lg:py-3 px-12 py-3  border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800"
								>
									{' '}
									Get started{' '}
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Body;
