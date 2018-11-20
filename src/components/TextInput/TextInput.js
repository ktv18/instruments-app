import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default class TextInput extends Component {

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
			error,
			fullWidth = true,
			errorMessage,
			variant = 'outlined',
			helperText,
		} = this.props;
		return (
			<TextField
				{...this.props}
				onChange={this.handleChange}
				variant={variant}
				fullWidth={fullWidth}
				helperText={error ? errorMessage : helperText }
			/>
		);
	}
}
