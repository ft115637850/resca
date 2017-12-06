import update from 'immutability-helper';
function pushIfNotExist(arr, val) {
	if (arr.indexOf(val) >= 0) {
		return arr;
	}
	return update(arr, { $push: [val] });
}

function speedTestRequest(state, action) {
	if (state.testStatus.isCancelled === true) {
		return state;
	}

	var { region } = action.payload;
	var { id, name } = region;
	return update(state, {
		entities: {
			regionLatency: {
				byName: {
					[name]: {
						$apply: regionTestInfo => {
							if (regionTestInfo === undefined) {
								return update(regionTestInfo, {
									$set: {
										id,
										name,
										startTime: (new Date()).getTime(),
										isSending: true
									}
								});
							}
							return update(regionTestInfo, {
								$merge: {
									startTime: (new Date()).getTime(),
									isSending: true
								}
							});
						}
					}
				},
				allNames: { $apply: names => {
					return pushIfNotExist(names, name);
				}}
			}
		}
	});
}

export default speedTestRequest;
