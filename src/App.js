import React, { Component } from 'react';
import { FormDialog, InstrumentsWrapper } from './components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(43, 209, 179)',
			contrastText: '#fff',
		},
		bla: {
			main: 'red',
		},
		secondary: {
			main: '#2b4bd1',
		},
	},
	typography: {
		h5: {
			color: '#4c4f58',
		},
	},
});

class App extends Component {

	state = {
		dialogOpen: false,
		instruments: [],
	}

	handleAddButtonClick = () =>
		this.setState({ dialogOpen: true })

	handleDialogClose = () =>
		this.setState({ dialogOpen: false })

	handleAddInstrument = (instrument) => {
		const instruments = [...this.state.instruments, instrument];
		this.setState({ instruments, dialogOpen: false });
	}
	render () {
		const { instruments } = this.state;
		return (
			<MuiThemeProvider theme={theme}>
				<InstrumentsWrapper
					instruments={instruments}
					title='Instruments'
					onAddInstrument={this.handleAddButtonClick}
				/>
				<FormDialog
					open={this.state.dialogOpen}
					onClose={this.handleDialogClose}
					onSubmit={this.handleAddInstrument}
				/>
			</MuiThemeProvider>
		);
	}
}

export default App;
