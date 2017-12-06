import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Strings from '../../strings';
import { SpeedTestTitle } from './SpeedTestTitle';
import SpeedTestControl from './SpeedTestControl';

const style = {
	width: 440,
	minHeight: 400,
	margin: 'auto',
	marginTop: 50,
	padding: '15px 15px 70px 15px',
	position: 'relative'
};

class SpeedTestPage extends React.Component {
	componentDidMount() {
		this.props.runTest();
	}

	render() {
		const {allCompleted} = this.props;

		return (
			<Paper style={style} zDepth={1}>
				<SpeedTestTitle/>
				<SpeedTestControl/>
				<div style={{textAlign: 'right'}}>
					{allCompleted ? <FlatButton label={Strings.speedTest.rerun} primary={true} onClick={() => this.props.runTest()} /> : ''}
				</div>
			</Paper>
		);
	}
}

export default SpeedTestPage;
