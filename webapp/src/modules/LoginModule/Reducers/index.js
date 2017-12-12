import { createReducer } from 'redux-create-reducer';
import types from '../ActionTypes';
// Reducer handlers
import pingSuccess from './pingSuccess';
import pingFailure from './pingFailure';
import loginSuccess from './loginSuccess';

const initialState = {
	userData: {
		pong: '',
		token: '',
		isAuthenticated: false
	}
};

function createReducerInModule() {
	return createReducer(initialState, {
		[types.PING_SUCCESS]: pingSuccess,
		[types.PING_SUCCESS]: pingFailure,
		[types.LOGIN_SUCCESS]: loginSuccess
	});
}

export default {
	initialState,
	createReducerInModule
};
