import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MaterialUIWrapper from './MaterialUIWrapper';
import createStoreWithEnhancers from './reduxStore';

class AppWrapper extends Component {
	constructor(props) {
		super(props);
		this.store = createStoreWithEnhancers();
	}

	render() {
		return (
			<Provider store={this.store}>
				<div>
					<MaterialUIWrapper>
						<div>
							{this.props.children}
						</div>
					</MaterialUIWrapper>
				</div>
			</Provider>
		);
	}
}

export default AppWrapper;
