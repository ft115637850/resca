import React from 'react';
import LatencyRows from './LatencyRows';
import LatencyCenter from './LatencyCenter';

class LatencyGroup extends React.Component {
	renderTopThreeCenters(sortedLatencyRows) {
		const rows = sortedLatencyRows.length > 3 ? sortedLatencyRows.slice(0, 3) : sortedLatencyRows;
		const {isSelectable, updateFieldValue} = this.props;
		return <LatencyRows isInLatencyCenter={false} sortedLatencyRows={rows} isSelectable={isSelectable} updateFieldValue={updateFieldValue}/>;
	}

	renderOtherCenters(sortedLatencyRows) {
		if (sortedLatencyRows.length > 3) {
			const rows = sortedLatencyRows.slice(3);
			const {isSelectable, updateFieldValue} = this.props;
			return <LatencyCenter sortedLatencyRows={rows} isSelectable={isSelectable} updateFieldValue={updateFieldValue}/>;
		}
	}

	render() {
		const {latencyRows} = this.props;
		const sortedLatencyRows = [...latencyRows].sort(function (a, b) {
			return a.latencyTime - b.latencyTime;
		});
		const topThreeCenters = this.renderTopThreeCenters(sortedLatencyRows);
		const otherCenters = this.renderOtherCenters(sortedLatencyRows);

		return (
			<div>
				{topThreeCenters}
				{otherCenters}
			</div>
		);
	}
}

export default LatencyGroup;
