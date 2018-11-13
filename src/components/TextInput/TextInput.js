import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const stylesObj = (theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing.unit,
	},
	textField: {
		width: '90%',
		flexBasis: 200,
	},
});

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2bd1b3',
			contrastText: '#fff',
		},
	},
});

class TextInput extends Component {

	state = {
		value: '',
	}

	static propTypes = {
		InputProps: PropTypes.object,
		classes: PropTypes.object,
		error: PropTypes.bool,
		errorMessage: PropTypes.string,
		helperText: PropTypes.string,
		label: PropTypes.string,
		multiline: PropTypes.bool,
		onChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
	}

	handleChange = ({ target }) => {
		const { value } = target;
		this.setState({ value }, this.props.onChange(value));
	}
	render () {
		const {
			classes,
			InputProps = {},
			label = '',
			multiline,
			placeholder = '',
			error,
			helperText,
			errorMessage,
		} = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				<TextField
					error={error}
					id='outlined-name'
					placeholder={placeholder}
					label={label}
					multiline={multiline}
					className={classNames(classes.margin, classes.textField)}
					value={this.state.value}
					onChange={this.handleChange}
					margin='normal'
					variant='outlined'
					InputProps={InputProps}
					helperText={error ? errorMessage : helperText }
				/>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(stylesObj)(TextInput);
