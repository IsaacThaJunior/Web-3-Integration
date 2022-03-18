import React from 'react';
import './Body.css';

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
					<div class="lg:flex-shrink-0 max-w-xl mx-auto sm:px-6  lg:px-8 lg:flex">
						<div class="inline-flex mx-24 rounded-md shadow">
							<button
								href="#"
								class="inline-flex items-center justify-center px-24 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							>
								{' '}
								Get started{' '}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Body;
