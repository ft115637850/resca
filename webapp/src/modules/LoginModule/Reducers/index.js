import { createReducer } from 'redux-create-reducer';
import types from '../ActionTypes';
// Reducer handlers
import pingSuccess from './pingSuccess';
import pingFailure from './pingFailure';

const initialState = {
	entities: {
		pong: ""
	}
};

function createReducerInModule() {
	return createReducer(initialState, {
		[types.PING_SUCCESS]: pingSuccess,
		[types.PING_SUCCESS]: pingFailure
	});
}

export default {
	initialState,
	createReducerInModule
};
