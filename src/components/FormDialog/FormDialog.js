import React, { Component, Fragment } from 'react';
import { createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../Button';
import SelectBox from '../SelectBox';
import TextInput from '../TextInput';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2bd1b3',
			contrastText: '#fff',
		},
	},
});

class FormDialog extends Component {

	handleClose = () => {
		this.props.onClose();
	}

	render () {
		const { open, title } = this.props;
		return (
			<Fragment>
				<MuiThemeProvider theme={theme}>
					<Dialog
						open={open}
						onClose={this.handleClose}
						aria-labelledby='form-dialog-title'
					>
						<DialogTitle id='form-dialog-title'>{title}</DialogTitle>
						<DialogContent>
							<TextInput
								autoFocus
								margin='dense'
								id='name'
								label='Email Address'
								type='email'
								fullWidth
							/>
							<SelectBox />
							<TextInput
								autoFocus
								margin='dense'
								id='name'
								label='Email Address'
								type='email'
								fullWidth
							/>
							<TextInput
								autoFocus
								margin='dense'
								id='name'
								label='Email Address'
								type='email'
								fullWidth
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color='primary'>
								Cancel
							</Button>
							<Button variant='contained' onClick={this.handleClose} color='primary'>
								Save
							</Button>
						</DialogActions>
					</Dialog>
				</MuiThemeProvider>
			</Fragment>
		);
	}
}

export default withTheme(theme)(FormDialog);

