import { expect } from 'chai';
import ActionTypes from '../ActionTypes';
import * as ActionCreators from './ActionCreators';
import { regions as allRegions } from '../constants';

describe('startNetworkSpeedRequest', () => {
	it('should return a proper action', () => {
		let increment = 20;
		expect(ActionCreators.startNetworkSpeedRequest(increment)).to.deep.equal({
			type: ActionTypes.NETWORK_SPEED_TEST_START,
			payload: {
				increment: 20
			}
		});
	});
});

describe('testNetworkSpeedRequest', () => {
	it('should return a proper action', () => {
		expect(ActionCreators.testNetworkSpeedRequest(allRegions)).to.deep.equal({
			type: ActionTypes.NETWORK_SPEED_TEST_REQUEST,
			payload: {
				region: allRegions
			}
		});
	});
});

describe('testNetworkSpeedSuccess', () => {
	it('should return a proper action', () => {
		let regionName = 'West US';
		let totalRounds = 10;
		expect(ActionCreators.testNetworkSpeedSuccess(regionName, totalRounds)).to.deep.equal({
			type: ActionTypes.NETWORK_SPEED_TEST_SUCCESS,
			payload: {
				regionName: regionName,
				totalRounds: totalRounds
			}
		});
	});
});

describe('checkTestNetworkSpeedFailure', () => {
	it('should return a proper action', () => {
		let regionName = 'West US';
		expect(ActionCreators.testNetworkSpeedFailure(regionName)).to.deep.equal({
			type: ActionTypes.NETWORK_SPEED_TEST_FAILURE,
			payload: {
				regionName: regionName
			}
		});
	});
});

describe('cancelNetworkSpeedTestRequest', () => {
	it('should return a proper action', () => {
		expect(ActionCreators.cancelNetworkSpeedTestRequest()).to.deep.equal({
			type: ActionTypes.NETWORK_SPEED_TEST_CANCEL_REQUEST,
			payload: {}
		});
	});
});
