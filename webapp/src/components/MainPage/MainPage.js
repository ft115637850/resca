import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Strings from '../../strings';

const MainPage = props => {
	const {friends, idleFriends, busyFriends, getContent} = props;
	return (
		<div>
			<h1>Welcome</h1>
			{(friends.length > 0) && (
				<div>
					<List>
						<Subheader>Idle</Subheader>
						{
							idleFriends.map((friend, index) => {
								return (
									<ListItem
										key={index}
										primaryText={friend.name}
										leftAvatar={<Avatar src={`images/${friend.avatar}`} />}
										rightIcon={<CommunicationChatBubble />}
									/>);
							})
						}
					</List>
					<Divider />
					<List>
						<Subheader>Busy</Subheader>
						{
							busyFriends.map((friend, index) => {
								return (
									<ListItem
										key={index}
										primaryText={friend.name}
										leftAvatar={<Avatar src={`images/${friend.avatar}`} />}
										rightIcon={<CommunicationChatBubble />}
									/>);
							})
						}
					</List>
				</div>
			)}
			<FlatButton label={Strings.getContent.getContent} primary={true} onClick={() => getContent()}/>
		</div>
	);
};

export default MainPage;
