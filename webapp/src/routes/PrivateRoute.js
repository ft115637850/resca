import React from 'react';
import { connect } from 'react-redux';
import {
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';
import loginModule from '../modules/LoginModule';
const { selectors } = loginModule;

const mapStateToProps = state => {
	return {
		isAuthenticated: selectors.isAuthenticated(state)
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
						pathname: '/resca/login',
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
