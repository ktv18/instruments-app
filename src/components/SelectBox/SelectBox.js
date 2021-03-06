import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const stylesObj = () => ({
	formControl: {
		marginTop: '24px',
	},
});

class SelectBox extends Component {

	static propTypes = {
		classes: PropTypes.object,
		disabled: PropTypes.bool,
		error: PropTypes.bool,
		label: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		noneLabel: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		outlined: PropTypes.bool,
	}

	state = {
		[this.props.name]: '',
		labelWidth: 0,
	}

	inputLabelRef = React.createRef();

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({
			[name]: value,
		}, this.props.onChange(value));
	}

	setLabelWidth (labelWidth) {
		this.setState({ labelWidth });
	}

	getInputId ({ name } = this.props) {
		return `input-${name}-id`;
	}

	componentDidMount () {
		if (this.props.outlined) {
			const refDomNode = ReactDOM.findDOMNode(this.inputLabelRef.current);
			this.setLabelWidth(refDomNode.offsetWidth);
		}
	}

	getSelectInput ({ outlined, name } = this.props) {
		if (!outlined) return <Input name={name} id={this.getInputId()} />;
		return (
			<OutlinedInput
				labelWidth={this.state.labelWidth}
				name={name}
				id={this.getInputId()}
			/>
		);
	}

	render () {
		const { classes, options = [], name, label, noneLabel, error, disabled, outlined } = this.props;
		return (
			<FormControl
				fullWidth
				variant={outlined ? 'outlined' : ''}
				className={classes.formControl}
				error={error}
				disabled={disabled}
			>
				<InputLabel
					ref={this.inputLabelRef}
					htmlFor={this.getInputId()}>
					{label}
				</InputLabel>
				<Select
					value={this.state[name]}
					onChange={this.handleChange}
					input={this.getSelectInput()}
				>
					{noneLabel && (
						<MenuItem value=''>
							<em>{noneLabel}</em>
						</MenuItem>
					)}
					{options
						.map(({ value, name }) => <MenuItem	key={value} value={value}>{name}</MenuItem>)}
				</Select>
			</FormControl>
		);
	}
}

export default withStyles(stylesObj)(SelectBox);
