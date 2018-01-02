import types from '../ActionTypes';

function pingSuccess(result) {
	return {
		type: types.PING_SUCCESS,
		payload: {
			pong: result
		}
	};
}

function pingFailure(result) {
	return {
		type: types.PING_FAILURE,
		payload: {
			pong: result
		}
	};
}

function loginSuccess(token) {
	return {
		type: types.LOGIN_SUCCESS,
		payload: {
			token: token
		}
	};
}

export default {
	pingSuccess,
	pingFailure,
	loginSuccess
};
