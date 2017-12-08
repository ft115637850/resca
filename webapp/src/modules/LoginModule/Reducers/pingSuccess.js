import update from 'immutability-helper';

function pingSuccess(state, action) {
	const { pong } = action.payload;
	return update(state, {
		entities: {
			$set: {
				pong: pong
			}
		}
	});
}
export default pingSuccess;
