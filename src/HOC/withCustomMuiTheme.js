import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(43, 209, 179)',
			contrastText: '#fff',
		},
		secondary: {
			main: 'rgb(43, 75, 209)',
		},
	},
	typography: {
		useNextVariants: true,
		h5: {
			color: '#4c4f58',
		},
	},
});

const getDisplayName = (comp = {}) =>
	comp.displayName || comp.name || 'Component';

const withCustomMuiTheme = (WrappedComponent) => {
	class WithUpload extends Component {
		render () {
			return (
				<MuiThemeProvider theme={theme}>
					<WrappedComponent {...this.props} />
				</MuiThemeProvider>
			);
		}
	}
	WithUpload.displayName = `WithUpload(${getDisplayName(WrappedComponent)})`;
	return WithUpload;
};

export default withCustomMuiTheme;
