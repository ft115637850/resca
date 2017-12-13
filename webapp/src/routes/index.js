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
			<Route path="/resca/login" component={Login}/>
			<PrivateRoute path="/resca/mainPage" component={MainPage}/>
			<Redirect to="/resca/mainPage"/>
		</Switch>
	</Router>
);

export default routes;
