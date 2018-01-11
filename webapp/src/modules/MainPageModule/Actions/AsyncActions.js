import Cookies from 'universal-cookie';
import { ApiClient, GetContentApi } from '../../../api-client/src';
import actionCreators from './ActionCreators';

const cookies = new Cookies();

function getContent() {
	return dispatch => {
		ApiClient.instance.authentications.oauth.accessToken = cookies.get('token');
		const getContentApi = new GetContentApi();
		getContentApi.getContent()
			.then(result => dispatch(actionCreators.getContentSuccess(result.friends)))
			.catch(result => {
				throw new Error(result);
			});
	};
}

export default {
	getContent
};
