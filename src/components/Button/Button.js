import React, { Component, Fragment } from 'react';
import ButtonMaterial from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2bd1b3',
			contrastText: '#fff',
		},
	},
});

class Button extends Component {
	render () {
		return (
			<Fragment>
				<MuiThemeProvider theme={theme}>
					<ButtonMaterial {...this.props} color='primary' />
				</MuiThemeProvider>
			</Fragment>
		);
	}
}

export default withTheme(theme)(Button);

