import React, { Component, Fragment } from 'react';
import { FormDialog, InstrumentsWrapper } from './components';
import { httpApi } from './utils';
import { withCustomMuiTheme } from './HOC';
import styles from './App.module.css';

const API = 'apiHost/api/v1';

class App extends Component {

	state = {
		dialogOpen: false,
		instruments: [],
	}

	componentDidMount () {
		this.fetchInstruments();
	}

	async fetchInstruments () {
		const url = `${API}/instruments`;
		try {
			const res = await httpApi.get(url);
			const instruments = await res.json();
			this.setState({ instruments });
		} catch (error) {
			// TODO: Handle error.
			console.log(error);
		}
	}

	async createInstrumentFetch (instument) {
		const url = `${API}/instruments`;
		try {
			const { status } = await httpApi.post(url, instument);
			if (status !== 200) {
				throw new Error('could not create an instrument');
			}
		} catch (error) {
			// TODO: Handle error.
			console.log(error);
		}
	}

	handleAddButtonClick = () =>
		this.setState({ dialogOpen: true })

	handleDialogClose = () =>
		this.setState({ dialogOpen: false })

	handleAddInstrument = (instrument) => {
		const instruments = [...this.state.instruments, instrument];
		this.createInstrumentFetch(instrument);
		this.setState({ instruments, dialogOpen: false });
	}

	render () {
		const { instruments } = this.state;
		return (
			<Fragment>
				<InstrumentsWrapper
					className={styles.instrumentsWrapper}
					instruments={instruments}
					title='Instruments'
					onAddInstrument={this.handleAddButtonClick}
				/>
				<FormDialog
					open={this.state.dialogOpen}
					onClose={this.handleDialogClose}
					onSubmit={this.handleAddInstrument}
				/>
			</Fragment>
		);
	}
}

export default withCustomMuiTheme(App);
