import { connect } from 'react-redux';
import MainPage from './MainPage';
import MainPageModule from '../../modules/MainPageModule';
const { selectors, actions } = MainPageModule;

const mapStateToProps = state => {
	return {
		friends: selectors.allFriends(state),
		idleFriends: selectors.idleFriends(state),
		busyFriends: selectors.busyFriends(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getContent: () => dispatch(actions.getContent())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
