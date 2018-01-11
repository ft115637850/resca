import React from 'react';
import { connect } from 'react-redux';
import {
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const mapStateToProps = () => {
	return {
		// TO DO: validate token
		isAuthenticated: cookies.get('token') !== undefined
	};
};

class PrivateRoute extends React.Component {
	render() {
		const { component: Component, isAuthenticated, ...rest } = this.props;
		return (
			<Route {...rest} render={props => (
				isAuthenticated ? (
					<Component {...props}/>
				) : (
					<Redirect to={{
						pathname: '/login',
						state: { from: props.location }
					}}
					/>
				)
			)}
			/>
		);
	}
}

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
