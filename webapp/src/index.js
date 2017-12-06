import React from 'react';
import ReactDOM from 'react-dom';
import BandWidthMeter from './components/BandWidthMeter';
import AppWrapper from './AppWrapper';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<AppWrapper>
			<BandWidthMeter/>
		</AppWrapper>
	</div>,
	document.getElementById('root'));
registerServiceWorker();
