import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import React from 'react';
import Websocket from '../common/Websocket';
import FlatButton from 'material-ui/FlatButton';
import Cookies from 'universal-cookie';
import Strings from '../../strings';

class MainPage extends React.Component {
	sendMessage(message) {
		this.refWebSocket.sendMessage(message);
	}

	handleData(data) {
		console.log(data);
	}

	handleOpen() {
		console.log('connected:)');
	}

	handleClose() {
		console.log('disconnected:(');
	}

	render() {
		const {friends, idleFriends, busyFriends, getContent} = this.props;
		const cookies = new Cookies();
		const token = cookies.get('token');
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
				<FlatButton label={'test websocket'} onClick={() => this.sendMessage('Hello')} />
				<Websocket url={`ws://${token}:token@127.0.0.1:7443/api/v0/ws-echo`} onMessage={this.handleData}
					onOpen={this.handleOpen} onClose={this.handleClose}
					reconnect={true}
					ref={Websocket => {
						this.refWebSocket = Websocket;
					}}
				/>
			</div>
		);
	}
}
export default MainPage;
