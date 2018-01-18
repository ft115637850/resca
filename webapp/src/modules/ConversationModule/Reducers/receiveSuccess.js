import update from 'immutability-helper';
import uuid from 'uuid';

function receiveSuccess(state, action) {
	const { msg } = action.payload;
	const id = uuid.v4();
	const message = {id, msg, sender: 'others'};
	return update(state, {
		entities: {
			msgList: {
				byId: {
					[id]: {
						$set: message
					}
				},
				allIds: { $push: [id] }
			}
		}
	});
}

export default receiveSuccess;
