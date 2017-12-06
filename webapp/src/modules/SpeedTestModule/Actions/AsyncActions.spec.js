import assert from 'assert';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AsyncActions from './AsyncActions';
import types from '../ActionTypes';
const mockStore = configureMockStore([thunk]);

describe('Project Async Actions', () => {
	it('should cancel network speed test when retrieving cancelNetworkSpeedTest', () => {
		const store = mockStore();
		const expectedActions = [
			{
				type: types.NETWORK_SPEED_TEST_CANCEL_REQUEST,
				payload: {}
			}
		];

		return store.dispatch(AsyncActions.cancelNetworkSpeedTest())
			.then(() => {
				const actualActions = store.getActions();
				assert.deepEqual(actualActions, expectedActions);
			});
	});
});
