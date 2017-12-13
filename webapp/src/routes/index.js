import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import components from '../components';
const {Login, MainPage} = components;

const routes = () => (
	<Router>
		<div>
			<Route path="/login" component={Login}/>
			<PrivateRoute path="/mainPage" component={MainPage}/>
		</div>
	</Router>
);

export default routes;
