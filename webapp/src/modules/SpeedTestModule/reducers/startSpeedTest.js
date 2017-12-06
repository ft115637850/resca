import update from 'immutability-helper';

function startSpeedTest(state, action) {
	const { increment } = action.payload;
	return update(state, {
		entities: {
			regionLatency: {
				$set: {
					byName: {},
					allNames: []
				}
			}
		},
		testStatus: {
			$set: {
				increment: increment,
				isCancelled: false,
				completed: 0,
				showSpeedTestDialog: true
			}
		}
	});
}
export default startSpeedTest;

