import update from 'immutability-helper';

function cancelTestRequest(state /* , action */) {
	return update(state, {
		testStatus: {
			$merge: {
				isCancelled: true,
				showSpeedTestDialog: false
			}
		}
	});
}
export default cancelTestRequest;

