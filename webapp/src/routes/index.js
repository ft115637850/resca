import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import components from '../components';
const {Login, MainPage} = components;

const routes = () => (
	<Router>
		<Switch>
			<Route path="/login" component={Login}/>
			<PrivateRoute path="/mainPage" component={MainPage}/>
			<Redirect to="/mainPage"/>
		</Switch>
	</Router>
);

export default routes;
