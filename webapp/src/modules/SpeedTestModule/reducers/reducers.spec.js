import assert from 'assert';
import { createReducerInModule as createReducer, initialState } from '.';
import {
	startNetworkSpeedRequest,
	testNetworkSpeedRequest,
	testNetworkSpeedSuccess,
	testNetworkSpeedFailure,
	cancelNetworkSpeedTestRequest
} from '../Actions/ActionCreators';

describe('Network speed test Reducers', () => {
	it('Start', () => {
		const reducer = createReducer();
		const action = startNetworkSpeedRequest(10);
		const newState = reducer(initialState, action);
		const expected = {
			entities: {
				regionLatency: {
					byName: {},
					allNames: []
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 0,
				showSpeedTestDialog: true
			}
		};
		assert.deepEqual(newState, expected);
	});

	it('Speed test request', () => {
		const reducer = createReducer();
		const region = {
			id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
			name: 'West Europe',
			latencyTestFile: 'https://wdsowesteuropeqastorage1.blob.core.windows.net/public/callback.js'
		};

		const action = testNetworkSpeedRequest(region);
		const beforeState = {
			entities: {
				regionLatency: {
					byName: {},
					allNames: []
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 0,
				showSpeedTestDialog: true
			}
		};
		const newState = reducer(beforeState, action);
		const expected = {
			entities: {
				regionLatency: {
					byName: {
						'West Europe': {
							id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
							name: 'West Europe',
							isSending: true
						}
					},
					allNames: ['West Europe']
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 0,
				showSpeedTestDialog: true
			}
		};
		assert.deepEqual(newState.testStatus, expected.testStatus);
		assert.deepEqual(newState.entities.regionLatency.allNames, expected.entities.regionLatency.allNames);
		assert.deepEqual(newState.entities.regionLatency.byName['West Europe'].id, '4aa320fb-0dfd-c223-73e6-08d34badaa8e');
		assert.deepEqual(newState.entities.regionLatency.byName['West Europe'].isSending, true);
	});

	it('Speed test success', () => {
		const reducer = createReducer();
		const action = testNetworkSpeedSuccess('West Europe', 10);

		const beforeState = {
			entities: {
				regionLatency: {
					byName: {
						'West Europe': {
							id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
							name: 'West Europe',
							isSending: true
						}
					},
					allNames: ['West Europe']
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 0,
				showSpeedTestDialog: true
			}
		};
		const newState = reducer(beforeState, action);
		const expected = {
			entities: {
				regionLatency: {
					byName: {
						'West Europe': {
							id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
							name: 'West Europe',
							isSending: false
						}
					},
					allNames: ['West Europe']
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 10,
				showSpeedTestDialog: true
			}
		};
		assert.deepEqual(newState.testStatus, expected.testStatus);
		assert.deepEqual(newState.entities.regionLatency.allNames, expected.entities.regionLatency.allNames);
		assert.deepEqual(newState.entities.regionLatency.byName['West Europe'].id, '4aa320fb-0dfd-c223-73e6-08d34badaa8e');
		assert.deepEqual(newState.entities.regionLatency.byName['West Europe'].isSending, false);
	});

	it('Speed test cancel', () => {
		const reducer = createReducer();
		const action = cancelNetworkSpeedTestRequest();

		const beforeState = {
			entities: {
				regionLatency: {
					byName: {
						'West Europe': {
							id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
							name: 'West Europe',
							isSending: true
						}
					},
					allNames: ['West Europe']
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 0,
				showSpeedTestDialog: true
			}
		};
		const newState = reducer(beforeState, action);
		const expected = {
			entities: {
				regionLatency: {
					byName: {
						'West Europe': {
							id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
							name: 'West Europe',
							isSending: true
						}
					},
					allNames: ['West Europe']
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: true,
				completed: 0,
				showSpeedTestDialog: false
			}
		};

		assert.deepEqual(newState.testStatus, expected.testStatus);
		assert.deepEqual(newState.entities.regionLatency.allNames, expected.entities.regionLatency.allNames);
		assert.deepEqual(newState.entities.regionLatency.byName['West Europe'].id, '4aa320fb-0dfd-c223-73e6-08d34badaa8e');
		assert.deepEqual(newState.entities.regionLatency.byName['West Europe'].isSending, true);

		const region = {
			id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
			name: 'West Europe',
			latencyTestFile: 'https://wdsowesteuropeqastorage1.blob.core.windows.net/public/callback.js'
		};

		const action2 = testNetworkSpeedRequest(region);
		const newState2 = reducer(expected, action2);
		assert.deepEqual(newState2, expected);
		const action3 = testNetworkSpeedSuccess('West Europe', 10, 10);
		const newState3 = reducer(expected, action3);
		assert.deepEqual(newState3, expected);
	});

	it('Speed test failed', () => {
		const reducer = createReducer();
		const action = testNetworkSpeedFailure('West Europe', 10);

		const beforeState = {
			entities: {
				regionLatency: {
					byName: {
						'West Europe': {
							id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
							name: 'West Europe',
							round: 9,
							isSending: true
						}
					},
					allNames: ['West Europe']
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 10,
				showSpeedTestDialog: true
			}
		};
		const newState = reducer(beforeState, action);
		const expected = {
			entities: {
				regionLatency: {
					byName: {
						'West Europe': {
							id: '4aa320fb-0dfd-c223-73e6-08d34badaa8e',
							name: 'West Europe',
							round: 10,
							totalElapsed: 3001,
							latencyTime: 3001,
							isSending: true
						}
					},
					allNames: ['West Europe']
				}
			},
			testStatus: {
				increment: 10,
				isCancelled: false,
				completed: 20,
				showSpeedTestDialog: true
			}
		};
		assert.deepEqual(newState, expected);

		// When latency is larger than test interval, success comes late.
		const lateSuccessAction = testNetworkSpeedSuccess('West Europe', 10);
		const lateSuccessState = reducer(expected, lateSuccessAction);
		assert.deepEqual(lateSuccessState, expected);
	});
});
