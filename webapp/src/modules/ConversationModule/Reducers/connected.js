import update from 'immutability-helper';

function connected(state) {
	return update(state, {
		status: {
			$set: {
				isConnected: true
			}
		}
	});
}
export default connected;
