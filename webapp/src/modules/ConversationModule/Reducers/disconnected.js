import update from 'immutability-helper';

function disconnected(state) {
	return update(state, {
		status: {
			$set: {
				isConnected: false
			}
		}
	});
}
export default disconnected;
