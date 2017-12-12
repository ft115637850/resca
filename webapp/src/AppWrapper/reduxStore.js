import {
	combineReducers,
	createStore
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import modules from '../modules';
import storeEnhancers from './storeEnhancers';

function createRootReducer(modules) {
	let reducerMap = {};

	modules.forEach(module => {
		reducerMap[module.NAME] = module.createReducer();
	});

	reducerMap.form = formReducer;
	return combineReducers(reducerMap);
}

function createStoreWithEnhancers() {
	const rootReducer = createRootReducer(modules);
	return createStore(rootReducer, storeEnhancers);
}

export default createStoreWithEnhancers;
