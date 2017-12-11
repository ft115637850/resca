import { ApiClient, PingPongApi } from '../../../api-client/src';
import actionCreators from './ActionCreators';
const {
	pingSuccess,
	pingFailure
} = actionCreators;

ApiClient.instance.authentications['resca'].accessToken = "sssss.sssssdffff.ffgggg";
const pingPongApi = new PingPongApi();

function pingServer() {
	return dispatch => {
		pingPongApi.pingPong()
			.then(result => dispatch(pingSuccess(result)))
			.catch(result => dispatch(pingFailure(result)));
	};
}

export default {
	pingServer
};
