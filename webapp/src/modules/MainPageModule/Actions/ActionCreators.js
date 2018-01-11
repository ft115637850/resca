import types from '../ActionTypes';
function getContentSuccess(friends) {
	return {
		type: types.GET_CONTENT_SUCCESS,
		payload: {
			friends: friends
		}
	};
}
export default {
	getContentSuccess
};
