import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import React from 'react';

class MainPage extends React.Component {
	componentDidMount() {
		this.props.getContent();
	}

	render() {
		const {friends} = this.props;

		return (
			<div>
				{(friends.length > 0) && (
					<div>
						<List>
							<Subheader>Recent chats</Subheader>
							{
								friends.map((friend, index) => {
									return (
										<ListItem
											key={index}
											primaryText={friend.name}
											leftAvatar={<Avatar src={`images/${friend.avatar}`} />}
											rightIcon={<CommunicationChat />}
											onClick={() => this.props.history.push(`/mainPage/${friend.name}`)}
										/>);
								})
							}
						</List>
					</div>
				)}
			</div>
		);
	}
}
export default MainPage;
