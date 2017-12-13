import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import AppWrapper from './AppWrapper';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<AppWrapper>
			<Routes />
		</AppWrapper>
	</div>,
	document.getElementById('root'));
registerServiceWorker();
