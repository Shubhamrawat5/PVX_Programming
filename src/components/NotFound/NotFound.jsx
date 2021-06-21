import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundIcon from '../Icons/NotFoundIcon';

function NotFound() {
	return (
		<div className="flex flex-row space-x-3 justify-evenly items-center h-full w-full">
			<NotFoundIcon className="h-full w-full" />
			<div className="flex flex-col space-y-3 items-center justify-center w-full">
				<h2 className="text-6xl font-bold">Page <span className="text-purple-700">Not Found</span></h2>
				<Link
					className="bg-gray-100 hover:bg-purple-700 px-4 py-1 text-purple-700 hover:text-white rounded font-medium text-xl"
					to="/"
				>
					Go Back To Home
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
