import types from '../ActionTypes';

function startNetworkSpeedRequest(increment) {
	return {
		type: types.NETWORK_SPEED_TEST_START,
		payload: {
			increment: increment
		}
	};
}

function testNetworkSpeedRequest(region) {
	return {
		type: types.NETWORK_SPEED_TEST_REQUEST,
		payload: {
			region: region
		}
	};
}

function testNetworkSpeedSuccess(regionName, totalRounds) {
	return {
		type: types.NETWORK_SPEED_TEST_SUCCESS,
		payload: {
			regionName: regionName,
			totalRounds: totalRounds
		}
	};
}

function testNetworkSpeedFailure(regionName) {
	return {
		type: types.NETWORK_SPEED_TEST_FAILURE,
		payload: {
			regionName: regionName
		}
	};
}

function cancelNetworkSpeedTestRequest() {
	return {
		type: types.NETWORK_SPEED_TEST_CANCEL_REQUEST,
		payload: {}
	};
}

export {
	startNetworkSpeedRequest,
	testNetworkSpeedRequest,
	testNetworkSpeedSuccess,
	testNetworkSpeedFailure,
	cancelNetworkSpeedTestRequest
};
