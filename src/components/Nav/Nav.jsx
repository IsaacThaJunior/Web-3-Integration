import React from 'react';
import Button from '../Button';

const Nav = () => {
	return (
		<>
			<div className=" flex items-center justify-between bg-transparent py-4 md:px-10 sm:px-4">
				<h2 className="text-lg font-medium cursor-pointer">Smart Connector</h2>
					<Button className="w-8">CONNECT</Button>
			</div>
		</>
	);
};

export default Nav;
