import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import React from 'react';
import Websocket from '../common/Websocket';
import FlatButton from 'material-ui/FlatButton';
import Cookies from 'universal-cookie';
import Strings from '../../strings';

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showAddNodeForm: false };
	}

	componentDidMount() {
		this.props.getContent();
	}
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
		const {friends} = this.props;
		const cookies = new Cookies();
		const token = cookies.get('token');
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
