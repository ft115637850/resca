import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiTheme from '../palettes/standard';

const MaterialUIWrapper = props => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(props.muiTheme)}>
			{props.children}
		</MuiThemeProvider>
	);
};

MaterialUIWrapper.defaultProps = {
	muiTheme: MuiTheme
};

export default MaterialUIWrapper;
