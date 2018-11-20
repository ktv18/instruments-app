import React, { Component } from 'react';
import classNames from 'classnames/bind';
import AddIcon from '@material-ui/icons/Add';
import Button from '../Button';
import styles from './styles.module.css';

export default class AddInstrumentButton extends Component {

	getClassName ({ className } = this.props) {
		const cx = classNames.bind(styles);
		return cx(styles.addInstrumentButton, className);
	}

	render () {
		return (
			<Button
				{...this.props}
				className={this.getClassName()}
				variant='contained'
			>
				<AddIcon fontSize='large' classes={{ root: styles.icon }} />
			</Button>
		);
	}
}
