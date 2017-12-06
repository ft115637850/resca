import { createReducer } from 'redux-create-reducer';
import types from '../ActionTypes';
// Reducer handlers
import startSpeedTest from './startSpeedTest';
import speedTestRequest from './speedTestRequest';
import speedTestSuccess from './speedTestSuccess';
import speedTestFailure from './speedTestFailure';
import cancelTestRequest from './cancelTestRequest';

const initialState = {
	entities: {
		regionLatency: {
			byName: {},
			allNames: []
		}
	},
	testStatus: {
		isCancelled: false,
		completed: 0,
		showSpeedTestDialog: false
	}
};

function createReducerInModule() {
	return createReducer(initialState, {
		[types.NETWORK_SPEED_TEST_START]: startSpeedTest,
		[types.NETWORK_SPEED_TEST_REQUEST]: speedTestRequest,
		[types.NETWORK_SPEED_TEST_SUCCESS]: speedTestSuccess,
		[types.NETWORK_SPEED_TEST_FAILURE]: speedTestFailure,
		[types.NETWORK_SPEED_TEST_CANCEL_REQUEST]: cancelTestRequest
	});
}

export {
	initialState,
	createReducerInModule
};
