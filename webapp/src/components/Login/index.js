import { connect } from 'react-redux';
import Login from './Login';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import loginModule from '../../modules/LoginModule';
const { actions, selectors } = loginModule;

const mapStateToProps = state => {
	return {
		pingResult: selectors.getPingResult(state),
		isAuthenticated: selectors.isAuthenticated(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		pingServer: () => dispatch(actions.pingServer()),
		loginRequest: values => dispatch(actions.loginRequest(values))
	};
};

export default compose(
	reduxForm({
		form: 'login'
	}),
	connect(mapStateToProps, mapDispatchToProps)
)(Login);
