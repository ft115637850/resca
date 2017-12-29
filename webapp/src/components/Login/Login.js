import React from 'react';
import { Field } from 'redux-form';
import {Redirect} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Strings from '../../strings';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} />
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

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
			<form onSubmit={handleSubmit(loginRequest)}>
				<Field
					name="username"
					type="text"
					component={renderField}
					label="Username"
				/>
				<Field
					name="password"
					type="password"
					component={renderField}
					label="Password"
				/>
				{error && <strong>{error}</strong>}
				<div>
					<button type="submit" disabled={submitting}>
						{Strings.login.login}
					</button>
					<button type="button" disabled={pristine || submitting} onClick={reset}>
						{Strings.login.clear}
					</button>
					<label>{this.props.pingResult}</label>
					<FlatButton label={Strings.login.ping} primary={true} onClick={() => this.props.pingServer()} />
				</div>
			</form>
		);
	}
}

export default Login;
