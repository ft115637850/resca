import { ApiClient, PingPongApi } from '../../../api-client/src';
import actionCreators from './ActionCreators';
const {
	pingSuccess,
	pingFailure,
	loginSuccess
} = actionCreators;

// ApiClient.instance.authentications['resca'].accessToken = "sssss.sssssdffff.ffgggg";
const pingPongApi = new PingPongApi();

function pingServer() {
	return dispatch => {
		pingPongApi.pingPong()
			.then(result => dispatch(pingSuccess(result)))
			.catch(result => dispatch(pingFailure(result)));
	};
}

function loginRequest(values) {
	return dispatch => {
		console.log(values);
		dispatch(loginSuccess({token: 'sssss.sssssdffff.ffgggg'}));
	};
}

export default {
	pingServer,
	loginRequest
};
