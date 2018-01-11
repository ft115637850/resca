import Cookies from 'universal-cookie';
import { ApiClient, PingPongApi, LoginApi } from '../../../api-client/src';
import actionCreators from './ActionCreators';
const {
	pingSuccess,
	pingFailure,
	loginSuccess
} = actionCreators;

const cookies = new Cookies();

function pingServer() {
	return dispatch => {
		ApiClient.instance.authentications.oauth.accessToken = cookies.get('token');
		const pingPongApi = new PingPongApi();
		pingPongApi.pingPong()
			.then(result => dispatch(pingSuccess(result.result)))
			.catch(result => dispatch(pingFailure(result)));
	};
}

function loginRequest(values) {
	return dispatch => {
		ApiClient.instance.authentications.oauth.accessToken = undefined;
		ApiClient.instance.authentications.basic.username = values.username;
		ApiClient.instance.authentications.basic.password = values.password;
		const loginApi = new LoginApi();
		loginApi.login()
			.then(res => {
				let expiresDate = new Date();
				expiresDate.setTime(expiresDate.getTime() + (15 * 60 * 1000));
				cookies.set('token', res.token, { path: '/', expires: expiresDate });
				dispatch(loginSuccess(res.token));
			})
			.catch(res => console.log(res));
	};
}

export default {
	pingServer,
	loginRequest
};
