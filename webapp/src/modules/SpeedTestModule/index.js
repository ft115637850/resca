import { NAME } from './constants';
import { createReducerInModule as createReducer } from './reducers';
import selectors from './selectors';
import actions from './Actions';

export {
	NAME,
	createReducer,
	selectors,
	actions
};

export default {
	NAME,
	createReducer,
	selectors,
	actions
};
