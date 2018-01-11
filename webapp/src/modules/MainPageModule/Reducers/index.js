import { createReducer } from 'redux-create-reducer';
import types from '../ActionTypes';
// Reducer handlers
import getContentSuccess from './getContentSuccess';

const initialState = {
	entities: {
		friends: {
			byId: {},
			allIds: []
		}
	}
};

function createReducerInModule() {
	return createReducer(initialState, {
		[types.GET_CONTENT_SUCCESS]: getContentSuccess
	});
}

export default {
	initialState,
	createReducerInModule
};
