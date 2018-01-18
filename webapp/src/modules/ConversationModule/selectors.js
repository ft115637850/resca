import { NAME } from './constants';
import { createSelector } from 'reselect';

const getStateSlice = state => state[NAME];
const isConnected = state => getStateSlice(state).status.isConnected;
const getById = state => getStateSlice(state).entities.msgList.byId;
const getAllIds = state => getStateSlice(state).entities.msgList.allIds;
const allMsgs = createSelector(
	getById,
	getAllIds,
	(msgs, ids) => {
		return ids.map(id => {
			return msgs[id];
		});
	}
);

export default { isConnected, allMsgs };
