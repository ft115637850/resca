import update from 'immutability-helper';

function addFriendToState(state, friend) {
	const { id } = friend;
	return update(state, {
		entities: {
			friends: {
				byId: {
					[id]: {
						$set: friend
					}
				},
				allIds: { $push: [id] }
			}
		}
	});
}

function getContentSuccess(state, action) {
	const { friends } = action.payload;
	let newState = update(state, {
		entities: {
			friends: {
				byId: { $set: {} },
				allIds: { $set: [] }
			}
		}
	});

	friends.forEach(friend => {
		newState = addFriendToState(newState, friend);
	});

	return newState;
}
export default getContentSuccess;
