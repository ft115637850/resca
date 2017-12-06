import update from 'immutability-helper';

function speedTestSuccess(state, action) {
	if (state.testStatus.isCancelled === true) {
		return state;
	}
	const { regionName, totalRounds } = action.payload;
	const oldRound = state.entities.regionLatency.byName[regionName].round || 0;
	if (oldRound >= totalRounds) {
		return state;
	}
	const newRound = oldRound + 1;
	const increment = state.testStatus.increment;
	const startTime = state.entities.regionLatency.byName[regionName].startTime;
	const elapsed = (new Date()).getTime() - startTime;
	// When latency is larger than test interval, success comes late, elapsed will be less than 0.
	if (elapsed <= 0) {
		return state;
	}
	const oldTotalElapsed = state.entities.regionLatency.byName[regionName].totalElapsed || 0;
	const newTotalElapsed = oldTotalElapsed + elapsed;
	const newAverageElapsed = Math.round(newTotalElapsed / newRound);
	const oldCompleted = state.testStatus.completed;
	return update(state, {
		entities: {
			regionLatency: {
				byName: {
					[regionName]: {
						$merge: {
							round: newRound,
							totalElapsed: newTotalElapsed,
							latencyTime: newAverageElapsed,
							isSending: false
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

export default speedTestSuccess;
