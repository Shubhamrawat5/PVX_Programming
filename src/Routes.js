import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PublicRoutes } from './constants/ROUTES';

function Routes() {
	return (
		<Switch>
			{ PublicRoutes.map((route) => (
				<Route exact path={route.path} component={route.component} />
			)) }
		</Switch>
	);
}

export default Routes;
