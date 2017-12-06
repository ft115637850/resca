import React from 'react';
import Strings from '../../strings';

const messageStyle = {fontSize: 12, paddingBottom: 12};

const SpeedTestTitle = () => (<div style={{fontSize: 20, fontWeight: 'bold'}}>{Strings.speedTest.title}</div>);

const SpeedTestMessageStart = () => (<p style={messageStyle}>{Strings.speedTest.description}</p>);

const SpeedTestMessageEnd = () => (<p style={messageStyle}>{Strings.speedTest.result}</p>);

export {
	SpeedTestTitle,
	SpeedTestMessageStart,
	SpeedTestMessageEnd
};
