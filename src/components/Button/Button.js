import React, { Component, Fragment } from 'react';
import ButtonMaterial from '@material-ui/core/Button';

export default class Button extends Component {
	render () {
		return (
			<Fragment>
				<ButtonMaterial color='primary' {...this.props} />
			</Fragment>
		);
	}
}
