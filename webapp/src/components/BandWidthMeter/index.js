import { connect } from 'react-redux';
import SpeedTestPage from './SpeedTestPage';
import { actions, selectors } from '../../modules/SpeedTestModule';

const mapStateToProps = state => {
	return {
		allCompleted: selectors.allCompleted(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		runTest: () => dispatch(actions.startNetworkSpeedTest())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeedTestPage);
