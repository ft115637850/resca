import React from 'react';
import { Field } from 'redux-form';
import {Redirect} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconPerson from 'material-ui/svg-icons/maps/person-pin';
import IconKey from 'material-ui/svg-icons/communication/vpn-key';
import IconButton from 'material-ui/IconButton';
import Strings from '../../strings';

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
	<div style={{flex: 1, paddingRight: '20px'}}>
		<TextField
			{...input}
			type={type}
			floatingLabelText={label}
			fullWidth={true}
		/>
		{touched && error && <span>{error}</span>}
	</div>
);

const style = {
	minHeight: 400,
	margin: 'auto',
	marginTop: 50,
	padding: '15px 15px 70px 15px',
	position: 'relative'
};

class Login extends React.Component {
	render() {
		const { loginRequest, isAuthenticated, error, handleSubmit, pristine, reset, submitting } = this.props;
		const { from } = this.props.location.state || { from: { pathname: '/mainPage' } };
		if (isAuthenticated) {
			return (
				<Redirect to={from}/>
			);
		}

		return (
			<Paper style={style} zDepth={2}>
				<form>
					<h2 style={{textAlign: 'center'}}>User login</h2>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
						<IconButton><IconPerson/></IconButton>
						<Field
							name="username"
							type="text"
							component={RenderField}
							label="Username"
						/>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
						<IconButton><IconKey/></IconButton>
						<Field
							name="password"
							type="password"
							component={RenderField}
							label="Password"
						/>
					</div>
					<div style={{display: 'flex', flexDirection: 'row'}}>
						<div style={{paddingLeft: 50, flex: '1'}}>
							<RaisedButton label={Strings.login.login} primary={true} onClick={handleSubmit(loginRequest)} />
						</div>
						<div style={{width: 'auto', paddingRight: 20}}>
							<RaisedButton label={Strings.login.clear} primary={true} onClick={reset} />
						</div>
					</div>
				</form>
			</Paper>
		);
	}
}

export default Login;
