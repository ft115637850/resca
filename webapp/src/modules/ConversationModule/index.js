import { NAME } from './constants';
import reducers from './Reducers';
import selectors from './selectors';
import actions from './Actions';
const createReducer = reducers.createReducerInModule;
export default {
	NAME,
	createReducer,
	selectors,
	actions
};
