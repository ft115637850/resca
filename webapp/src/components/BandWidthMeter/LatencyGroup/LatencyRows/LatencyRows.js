import React from 'react';
import LatencyRow from './LatencyRow';
import Divider from 'material-ui/Divider';

class LatencyRows extends React.Component {
	render() {
		const { sortedLatencyRows, isSelectable, updateFieldValue, isInLatencyCenter } = this.props;

		return (
			<div>
				{sortedLatencyRows.map((row, i) => {
					return (
						<div key={i}>
							<LatencyRow {...row} index={i} isInLatencyCenter={isInLatencyCenter} isSelectable={isSelectable} updateFieldValue={updateFieldValue} />
							<Divider />
						</div>
					);
				})}
			</div>
		);
	}
}

export default LatencyRows;
