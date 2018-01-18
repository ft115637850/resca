import { createReducer } from 'redux-create-reducer';
import types from '../ActionTypes';
// Reducer handlers
import sendSuccess from './sendSuccess';
import receiveSuccess from './receiveSuccess';
import connected from './connected';
import disconnected from './disconnected';

const initialState = {
	entities: {
		msgList: {
			byId: {},
			allIds: []
		}
	},
	status: {
		isConnected: true
	}
};

function createReducerInModule() {
	return createReducer(initialState, {
		[types.SEND_SUCCESS]: sendSuccess,
		[types.RECEIVE_SUCCESS]: receiveSuccess,
		[types.CONNECTED]: connected,
		[types.DISCONNECTED]: disconnected
	});
}

export default {
	initialState,
	createReducerInModule
};
