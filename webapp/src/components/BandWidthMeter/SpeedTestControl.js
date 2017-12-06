import React from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import LatencyGroup from './LatencyGroup';
import {SpeedTestMessageStart, SpeedTestMessageEnd} from './SpeedTestTitle';
import { selectors } from '../../modules/SpeedTestModule';

const mapStateToProps = state => {
	return {
		allRegionsTestInfo: selectors.allRegionsTestInfo(state),
		progress: selectors.getProgress(state),
		allCompleted: selectors.allCompleted(state)
	};
};

class SpeedTestControl extends React.Component {
	render() {
		const { progress, allRegionsTestInfo, allCompleted, isSelectable, updateFieldValue } = this.props;
		const style = {};

		return (
			<div>
				{allCompleted ? (
					<div style={style}>
						<SpeedTestMessageEnd/>
						<LatencyGroup latencyRows={allRegionsTestInfo} isSelectable={isSelectable} updateFieldValue={updateFieldValue} />
					</div>
				) : (
					<div style={style}>
						<SpeedTestMessageStart/>
						<div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
							<LinearProgress mode="determinate" value={progress} style={{height: 30}}/>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(SpeedTestControl);
