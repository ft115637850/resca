import {
	applyMiddleware,
	compose
} from 'redux';

import thunk from 'redux-thunk';
import reduxFreeze from 'redux-freeze';

const middleware = [thunk, reduxFreeze];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(...middleware));
