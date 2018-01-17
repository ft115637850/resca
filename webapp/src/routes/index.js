import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import components from '../components';
const {Login, MainPage, Conversation} = components;

const routes = () => (
	<Router>
		<Switch>
			<Route path="/login" exact={true} component={Login}/>
			<PrivateRoute path="/mainPage" exact={true} component={MainPage}/>
			<PrivateRoute path="/mainPage/:friendId" exact={true} component={Conversation}/>
			<Redirect to="/mainPage"/>
		</Switch>
	</Router>
);

export default routes;
