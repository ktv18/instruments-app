import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '../Button';
import styles from './styles.module.css';

export default class AddInstrumentButton extends Component {
	render () {
		return (
			<Button
				{...this.props}
				className={ styles.addInstrumentButton }
				variant='contained'
			>
				<AddIcon fontSize='large' classes={{ root: styles.icon }} />
			</Button>
		);
	}
}
