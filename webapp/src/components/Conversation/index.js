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

const Conversation = props => (
	<div style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 20px)'}}>
		<div style={{flex: '1'}}>
			<AppBar
				title={<span style={{cursor: 'pointer'}}>{props.match.params.friendId}</span>}
				iconElementLeft={<IconButton><IconBack /></IconButton>}
			/>
			<div style={{display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 150px)', overflow: 'auto'}}>
				<Chip style={{margin: 4, alignSelf: 'flex-start'}}>
					<Avatar src="/images/chexee-128.jpg" />
					Image Avatar Chip adsasf
				</Chip>
				<Chip style={{margin: 4, alignSelf: 'flex-end'}}>
					<Avatar src="/images/jsa-128.jpg" />
					Image Avatar Chip adsasf
				</Chip>
				<Chip style={{margin: 4, alignSelf: 'flex-start'}}>
					<Avatar src="/images/chexee-128.jpg" />
					Image Avatar Chip adsasf
				</Chip>
				<Chip style={{margin: 4, alignSelf: 'flex-end'}}>
					<Avatar src="/images/jsa-128.jpg" />
					Image Avatar Chip adsasf
				</Chip>
			</div>
		</div>
		<div >
			<Divider/>
			<div style={{display: 'flex'}}>
				<FlatButton icon={<IconCamera />} style={{marginTop: 12}}/>
				<TextField fullWidth={true}/>
				<FlatButton icon={<IconSend />} style={{marginTop: 12}}/>
			</div>
		</div>
	</div>);

export default Conversation;
