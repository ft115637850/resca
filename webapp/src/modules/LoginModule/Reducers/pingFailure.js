import update from 'immutability-helper';

function pingFailure(state, action) {
	const { pong } = action.payload;
	return update(state, {
		entities: {
			$set: {
				pong: pong
			}
		}
	});
}
export default pingFailure;
