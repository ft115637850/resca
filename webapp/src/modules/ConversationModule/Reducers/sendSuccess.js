import update from 'immutability-helper';
import uuid from 'uuid';

function sendSuccess(state, action) {
	const { msg } = action.payload;
	const id = uuid.v4();
	const message = {id, msg, sender: 'self'};
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

export default sendSuccess;
