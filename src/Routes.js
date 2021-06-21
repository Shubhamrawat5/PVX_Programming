import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from './constants/ROUTES';
import Languages from './views/Languages/Languages';

function Routes() {
	return (
		<Switch>
			<Route exact path={ROUTES.home} component={Languages} />
		</Switch>
	);
}

export default Routes;
