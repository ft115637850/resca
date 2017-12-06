import React from 'react';
import Paper from 'material-ui/Paper';
import colors from '../../../../../palettes/standard';
import Strings from '../../../../../strings';

const getLatencyColor = function (latencyTime) {
	if (latencyTime <= 100) {
		return colors.situationalPalette.normal;
	}
	if (latencyTime > 100 && latencyTime <= 400) {
		return colors.situationalPalette.warning;
	}
	if (latencyTime > 400) {
		return colors.situationalPalette.error;
	}

	return '#000';
};

class LatencyRow extends React.Component {
	render() {
		const { name, latencyTime } = this.props;

		return (
			<Paper style={{ display: 'flex', flexFlow: 'row', margin: '5px 0 5px 0', borderLeft: 'solid 12px', padding: '4px 0 8px 8px', borderLeftColor: getLatencyColor(latencyTime) }} zDepth={0}>
				<div style={{ display: 'flex', flexFlow: 'column', flex: '1' }}>
					<div>{name}</div>
					<div style={{ fontSize: 12, marginBottom: 3, color: '#adadad' }}>
						{latencyTime > 3000 ? Strings.speedTest.timeout : latencyTime + Strings.speedTest.msLatency}
					</div>
				</div>
			</Paper>
		);
	}
}

export default LatencyRow;
