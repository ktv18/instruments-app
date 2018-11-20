import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '../Button';
import SelectBox from '../SelectBox';
import TextInput from '../TextInput';
import styles from './styles.module.css';

const options = [
	{
		value: '_id_1',
		name: 'guitar',
	},
	{
		value: '_id_2',
		name: 'drum',
	},
	{
		value: '_id_3',
		name: 'saxophone',
	},
	{
		value: '_id_4',
		name: 'violin',
	},
];

const stylesObj = () => ({
	textField: {
		marginTop: '16px',
	},
});

const getInitialInputsState = () => ({
	inputs: {
		name: {
			value: '',
			focused: false,
			isValid: false,
		},
		type: {
			value: '',
			focused: false,
			isValid: false,
		},
		description: {
			value: '',
			focused: false,
			isValid: false,
		},
		cost: {
			value: '',
			focused: false,
			isValid: false,
		},
	},
	showValidationErrors: false,
});

const VALIDATION_ERROR = 'This field is required';

class FormDialog extends Component {

	static propTypes = {
		classes: PropTypes.object,
		fullScreen: PropTypes.bool.isRequired,
		onClose: PropTypes.func,
		onSubmit: PropTypes.func.isRequired,
		open: PropTypes.bool,
	}

	state = {
		...getInitialInputsState(),
	}

	getInputValues (inputsObj) {
		return Object.keys(inputsObj).reduce((prev, current) => {
			prev[current] = inputsObj[current].value;
			return prev;
		}, {});
	}

	isFormValid (inputsObj) {
		return Object.values(inputsObj)
			.every(this.checkValidity);
	}

	handleClose = () => {
		const { onClose = () => {} } = this.props;
		this.resetState(onClose);
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ showValidationErrors: true });
		const { onSubmit } = this.props;
		const inputValues = this.getInputValues(this.state.inputs);
		const isFormValid = this.isFormValid(inputValues);
		if (isFormValid) return this.resetState(() => onSubmit(inputValues));
	}

	checkValidity (value) {
		return !!value;
	}

	resetState (cb) {
		this.setState({ ...getInitialInputsState() }, cb);
	}

	handleInputChange = (name) =>
		(value) => {
			const inputs = { ...this.state.inputs };
			inputs[name].value = value;
			inputs[name].isValid = this.checkValidity(value);
			this.setState({ inputs });
		}

	handleInputFocus = (name, focus = true) =>
		() => {
			const inputs = { ...this.state.inputs };
			inputs[name].focused = focus;
			this.setState({ inputs });
		}

	getInputStateByName (name) {
		return this.state.inputs[name];
	}

	shouldShowError (name, { showValidationErrors } = this.state) {
		const inputState = this.getInputStateByName(name);
		return showValidationErrors && !inputState.isValid && !inputState.focused;
	}

	render () {
		const { open, classes, fullScreen } = this.props;
		return (
			<Fragment>
				<Dialog
					fullScreen={fullScreen}
					open={open}
					classes={{ paper: styles.dialogPaper }}
					onClose={this.handleClose}
					aria-labelledby='form-dialog-title'
				>
					<div className={styles.header}>
						<Typography variant='h5'>
							Add an instrument
						</Typography>
						<IconButton color='inherit' onClick={this.handleClose} aria-label='Close'>
							<CloseIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={styles.content}>
						<form className={styles.form} id='addInstrumetnForm'
							onSubmit={this.handleSubmit}
						>
							<div className={styles.formContent}>
								<TextInput
									className={classes.textField}
									onFocus={this.handleInputFocus('name')}
									onBlur={this.handleInputFocus('name', false)}
									onChange={this.handleInputChange('name')}
									name='type'
									label='Name'
									errorMessage={VALIDATION_ERROR}
									error={this.shouldShowError('name')}
								/>
								<SelectBox
									className={classes.textField}
									onFocus={this.handleInputFocus('type')}
									onBlur={this.handleInputFocus('type', false)}
									onChange={this.handleInputChange('type')}
									name='type'
									label='Type'
									options={options}
									outlined
									error={this.shouldShowError('type')}
								/>
								<TextInput
									className={classes.textField}
									onFocus={this.handleInputFocus('description')}
									onBlur={this.handleInputFocus('description', false)}
									onChange={this.handleInputChange('description')}
									multiline
									label='Description'
									inputProps={{ maxlength: 300 }}
									helperText='Up to 300 characters'
									error={this.shouldShowError('description')}
									errorMessage={VALIDATION_ERROR}
								/>
								<TextInput
									className={classes.textField}
									onFocus={this.handleInputFocus('cost')}
									onBlur={this.handleInputFocus('cost', false)}
									onChange={this.handleInputChange('cost')}
									placeholder='Cost'
									InputProps={{
										startAdornment: (
											<InputAdornment
												classes={{ root: styles.InputAdornment }}
												position='start'>
												$
											</InputAdornment>
										),
									}}
									error={this.shouldShowError('cost')}
									errorMessage={VALIDATION_ERROR}
								/>
							</div>
						</form>
					</div>
					<div className={styles.footer}>
						<div className={styles.actions}>
							<Button onClick={this.handleClose} color='primary'>
										Cancel
							</Button>
							<Button
								type='submit'
								form='addInstrumetnForm'
								variant='contained'
								color='primary'
							>
										Save
							</Button>
						</div>
					</div>
				</Dialog>
			</Fragment>

		);
	}
}
export default withMobileDialog()(withStyles(stylesObj)(FormDialog));
