import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './components/NotFound/NotFound';
import { PublicRoutes } from './constants/ROUTES';

function Routes() {
	return (
		<Switch>
			{ PublicRoutes.map((route) => (
				<Route key={route.path} exact path={route.path} component={route.component} />
			)) }
			<Route exact path="*" component={NotFound} />
		</Switch>
	);
}

export default Routes;
