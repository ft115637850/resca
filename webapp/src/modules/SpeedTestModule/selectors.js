import { NAME } from './constants';
import { createSelector } from 'reselect';

const getStateSlice = state => state[NAME];
const getProgress = state => getStateSlice(state).testStatus.completed;
const isCancelled = state => getStateSlice(state).testStatus.isCancelled;
const showSpeedTestDialog = state => getStateSlice(state).testStatus.showSpeedTestDialog;
const getByName = state => getStateSlice(state).entities.regionLatency.byName;
const getAllNames = state => getStateSlice(state).entities.regionLatency.allNames;

const allRegionsTestInfo = createSelector(
	getByName,
	getAllNames,
	(regions, names) => {
		return names.map(name => {
			return {
				regionId: regions[name].id,
				name: regions[name].name,
				latencyTime: regions[name].latencyTime
			};
		});
	}
);

const allCompleted = createSelector(
	getProgress,
	progress => progress >= 99.5
);

const selectors = { getProgress, isCancelled, showSpeedTestDialog, allRegionsTestInfo, allCompleted };
export default selectors;
