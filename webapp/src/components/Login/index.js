import { connect } from 'react-redux';
import Login from './Login';
import loginModule from '../../modules/LoginModule';
const  { actions, selectors } = loginModule;

const mapStateToProps = state => {
	return {
		pingResult: selectors.getPingResult(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		pingServer: () => dispatch(actions.pingServer())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
