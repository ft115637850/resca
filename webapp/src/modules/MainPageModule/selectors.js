import { NAME } from './constants';
import { createSelector } from 'reselect';

const getStateSlice = state => state[NAME];
const getById = state => getStateSlice(state).entities.friends.byId;
const getAllIds = state => getStateSlice(state).entities.friends.allIds;
const allFriends = createSelector(
	getById,
	getAllIds,
	(friends, ids) => {
		return ids.map(id => {
			return {
				id: friends[id].id,
				name: friends[id].name,
				status: friends[id].status,
				avatar: friends[id].avatar
			};
		});
	}
);

const idleFriends = createSelector(
	allFriends,
	friends => {
		return friends.filter(friend => friend.status === 'idle');
	}
);

const busyFriends = createSelector(
	allFriends,
	friends => {
		return friends.filter(friend => friend.status === 'busy');
	}
);

export default { allFriends, idleFriends, busyFriends };
