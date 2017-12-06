import { connect } from 'react-redux';
import LatencyRow from './LatencyRow';
import { actions } from '../../../../../modules/SpeedTestModule';

const mapDispatchToProps = dispatch => {
	return {
		onSelectRegion: () => dispatch(actions.cancelNetworkSpeedTest())
	};
};

export default connect(null, mapDispatchToProps)(LatencyRow);
