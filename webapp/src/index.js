import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import AppWrapper from './AppWrapper';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<AppWrapper>
			<Login/>
		</AppWrapper>
	</div>,
	document.getElementById('root'));
registerServiceWorker();
