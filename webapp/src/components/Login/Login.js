import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Strings from '../../strings';

const style = {
	width: 440,
	minHeight: 400,
	margin: 'auto',
	marginTop: 50,
	padding: '15px 15px 70px 15px',
	position: 'relative'
};

class Login extends React.Component {
	render() {
		return (
			<Paper style={style} zDepth={1}>
				<label>{this.props.pingResult}</label>
				<FlatButton label={Strings.login.ping} primary={true} onClick={() => this.props.pingServer()} />
			</Paper>
		);
	}
}

export default Login;