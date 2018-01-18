import { connect } from 'react-redux';
import Conversation from './Conversation';
import ConversationModule from '../../modules/ConversationModule';
const { selectors, actions } = ConversationModule;

const mapStateToProps = state => {
	return {
		msgs: selectors.allMsgs(state),
		isConnected: selectors.isConnected(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		send: msg => dispatch(actions.sendSuccess(msg)),
		receive: msg => dispatch(actions.receiveSuccess(msg)),
		connected: log => dispatch(actions.connected(log)),
		disconnected: log => dispatch(actions.disconnected(log))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
