import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconSend from 'material-ui/svg-icons/content/send';
import IconCamera from 'material-ui/svg-icons/image/photo-camera';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Cookies from 'universal-cookie';
import Websocket from '../common/Websocket';

class Conversation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.sendMessage = this.sendMessage.bind(this);
		this.handleData = this.handleData.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	sendMessage(message) {
		this.refWebSocket.sendMessage(message);
		this.props.send(message);
		this.setState({
			value: ''
		});
	}

	handleData(data) {
		this.props.receive(data);
	}

	handleOpen() {
		this.props.connected('connected:)');
	}

	handleClose() {
		this.props.disconnected('disconnected:(');
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		const cookies = new Cookies();
		const token = cookies.get('token');
		return (
			<div style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 20px)'}}>
				<div style={{flex: '1'}}>
					<AppBar
						title={<span style={{cursor: 'pointer'}}>{this.props.match.params.friendId}</span>}
						iconElementLeft={<IconButton><IconBack /></IconButton>}
					/>
					<div style={{display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 150px)', overflow: 'auto'}}>
						{
							this.props.msgs.map((msg, index) => {
								return (
									msg.sender === 'self' ? (
										<Chip key={index} style={{margin: 4, alignSelf: 'flex-end'}}>
											<Avatar src="/images/jsa-128.jpg" />
											{msg.msg}
										</Chip>
									) : (
										<Chip key={index} style={{margin: 4, alignSelf: 'flex-start'}}>
											<Avatar src="/images/chexee-128.jpg" />
											{msg.msg}
										</Chip>
									)
								);
							})
						}
					</div>
				</div>
				<div >
					<Divider/>
					<div style={{display: 'flex'}}>
						<FlatButton icon={<IconCamera />} style={{marginTop: 12}}/>
						<TextField id="sendText" fullWidth={true} disabled={!this.props.isConnected} value={this.state.value} onChange={this.handleChange}/>
						<FlatButton icon={<IconSend />} style={{marginTop: 12}} onClick={() => this.sendMessage(this.state.value)}/>
					</div>
				</div>
				<Websocket url={`ws://${token}:token@127.0.0.1:7443/api/v0/ws-echo`} onMessage={this.handleData}
					onOpen={this.handleOpen} onClose={this.handleClose}
					reconnect={true}
					ref={Websocket => {
						this.refWebSocket = Websocket;
					}}
				/>
			</div>);
	}
}

export default Conversation;
