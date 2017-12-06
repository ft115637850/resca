import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconChevron from 'material-ui/svg-icons/navigation/expand-more';
import LatencyRows from '../LatencyRows';
import Strings from '../../../../strings';

class LatencyCenter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};

		this.handleExpandChange = this.handleExpandChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleExpandChange(expanded) {
		this.setState({ expanded: expanded });
	}

	handleToggle() {
		this.setState({ expanded: true });
	}

	render() {
		const { sortedLatencyRows, isSelectable, updateFieldValue } = this.props;

		return (
			<div>
				<div style={{ textAlign: 'right', display: this.state.expanded ? 'none' : 'inherit' }}>
					<FlatButton
						label={Strings.speedTest.showLabel}
						icon={<IconChevron />}
						primary={true}
						onClick={this.handleToggle}
					/>
				</div>
				<div style={{ padding: 0, display: this.state.expanded ? 'inherit' : 'none' }}>
					<LatencyRows isInLatencyCenter={true} expanded={this.state.expanded} sortedLatencyRows={sortedLatencyRows} isSelectable={isSelectable} updateFieldValue={updateFieldValue} />
				</div>
			</div>
		);
	}
}

export default LatencyCenter;
