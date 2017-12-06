import update from 'immutability-helper';

function speedTestFailure(state, action) {
	var { regionName } = action.payload;
	const increment = state.testStatus.increment;
	let oldCompleted = state.testStatus.completed;
	let oldRound = state.entities.regionLatency.byName[regionName].round || 0;
	let newRound = oldRound + 1;
	const oldTotalElapsed = state.entities.regionLatency.byName[regionName].totalElapsed || 0;
	return update(state, {
		entities: {
			regionLatency: {
				byName: {
					[regionName]: {
						$merge: {
							round: newRound,
							totalElapsed: oldTotalElapsed + 3001,
							latencyTime: 3001
						}
					}
				}
			}
		},
		testStatus: {
			$merge: {
				completed: oldCompleted + increment
			}
		}
	});
}
export default speedTestFailure;

