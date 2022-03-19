import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			<div className=" flex items-center justify-between bg-transparent py-4 md:px-10 px-4">
				<Link to="/" exact>
					{' '}
					<h2 className="text-lg font-medium cursor-pointer">
						Smart Connector
					</h2>
				</Link>

				<Button className="w-8">connect</Button>
			</div>
		</>
	);
};

export default Nav;
