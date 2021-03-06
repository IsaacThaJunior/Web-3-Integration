import React from 'react';
import Nav from '../components/Nav/Nav';

const FundingPage = () => {
	return (
		<>
			<Nav />
			<div>
				<div class="my-2  mx-auto max-w-5xl lg:mx-72 mx-6">
					<div class="md:col-span-1">
						<div class="px-4 sm:px-0"></div>
					</div>
					<div class="mt-5 md:mt-0 md:col-span-2">
						<form action="#" method="POST">
							<div class="shadow sm:rounded-md sm:overflow-hidden">
								<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div class="grid grid-cols-3 gap-6">
										<div class="col-span-6 sm:col-span-3">
											<label
												for="first-name"
												class="block text-sm font-medium text-gray-700"
											>
												Enter your Name{' '}
											</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autocomplete="given-name"
												class="mt-1 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div class="col-span-6 sm:col-span-3">
											<label
												for="last-name"
												class="block text-sm font-medium text-gray-700"
											>
												Enter title of Fund Request{' '}
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autocomplete="family-name"
												class="mt-1 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div class="col-span-6 sm:col-span-4">
											<label
												for="amount"
												class="block text-sm font-medium text-gray-700"
											>
												Enter amount{' '}
											</label>
											<input
												type="number"
												class="mt-1 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>

									<div>
										<label
											for="about"
											class="block text-sm font-medium text-gray-700"
										>
											{' '}
											Enter description{' '}
										</label>
										<div class="mt-1">
											<textarea
												id="about"
												name="about"
												rows="5"
												class="shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm  border-gray-300 rounded-md"
												// placeholder="you@example.com"
											></textarea>
										</div>
									</div>

									<div>
										<label class="block text-sm font-medium text-gray-700">
											{' '}
											Upload fund request image/proof{' '}
										</label>
										<div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
											<div class="space-y-1 text-center">
												<svg
													class="mx-auto h-12 w-12 text-gray-400"
													stroke="currentColor"
													fill="none"
													viewBox="0 0 48 48"
													aria-hidden="true"
												>
													<path
														d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<div class="flex text-sm text-gray-600">
													<label
														for="file-upload"
														class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
													>
														<span>Upload a file</span>
														<input
															id="file-upload"
															name="file-upload"
															type="file"
															class="sr-only"
														/>
													</label>
													<p class="pl-1">or drag and drop</p>
												</div>
												<p class="text-xs text-gray-500">
													PNG, JPG, GIF up to 10MB
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
									<button
										type="submit"
										class="inline-flex items-center justify-center lg:px-36 lg:py-3 px-24 py-3  border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800"
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="hidden sm:block" aria-hidden="true">
				<div class="py-5">
					<div class="border-t border-gray-200"></div>
				</div>
			</div>
		</>
	);
};

export default FundingPage;
