import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './styles.module.css';

export default class InstrumentBlock extends Component {

	getClassName ({ className } = this.props) {
		const cx = classNames.bind(styles);
		return cx(styles.wrapper, className);
	}

	render () {
		const { name } = this.props;
		return (
			<div className={this.getClassName()}>
				<Tooltip title={name}>
					<Button
						{...this.props}
						className={styles.InstrumentBlock}
						variant='contained'
						color='secondary'
					/>
				</Tooltip>
			</div>
		);
	}
}
