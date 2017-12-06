import { regions as allRegions } from '../constants.js';
import * as api from '../../../api-client';
import {
	startNetworkSpeedRequest,
	testNetworkSpeedRequest,
	testNetworkSpeedSuccess,
	testNetworkSpeedFailure,
	cancelNetworkSpeedTestRequest
} from './ActionCreators';

const TOTALROUNDS = 10;
const UPDATEINTERVAL = 2000; // start a new test round every 2 seconds

let pingCount = 0;
const apiInstance = new api.ApiClient();

function startNetworkSpeedTest(regions = allRegions) {
	return dispatch => {
		const increment = 100 / (regions.length * TOTALROUNDS);
		dispatch(startNetworkSpeedRequest(increment));
		pingCount = 0;
		dispatch(testNetworkSpeed(regions));
	};
}

function testNetworkSpeed(regions) {
	return dispatch => {
		regions.forEach(region => {
			dispatch(testNetworkSpeedRequest(region));
			apiInstance.getJsonP(region.latencyTestFile, region.name, UPDATEINTERVAL - 200)
				.then(regionName => dispatch(testNetworkSpeedSuccess(regionName, TOTALROUNDS)))
				.catch(regionName => dispatch(testNetworkSpeedFailure(regionName)));
		});
		pingCount++;
		if (pingCount < TOTALROUNDS) {
			setTimeout(dispatch, UPDATEINTERVAL, testNetworkSpeed(regions));
		}
	};
}

function cancelNetworkSpeedTest() {
	pingCount = TOTALROUNDS + 1;
	return dispatch => {
		dispatch(cancelNetworkSpeedTestRequest());
		return new Promise(resolve => resolve());
	};
}

export default {
	startNetworkSpeedTest,
	cancelNetworkSpeedTest
};
