import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames/bind';
import InstrumentBlock from '../InstrumentBlock';
import AddInstrumentButton from '../AddInstrumentButton';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css';

export default class InstrumentsWrapper extends Component {

	static propTypes = {
		instruments: PropTypes.array,
		onAddInstrument: PropTypes.func,
	}

	getClassName ({ className } = this.props) {
		const cx = classNames.bind(styles);
		return cx(styles.wrapper, className);
	}

	render () {
		const { instruments, onAddInstrument } = this.props;
		return (
			<div className={this.getClassName()}>
				<Paper classes={{ root: styles.paper }}>
					<div className={styles.header}>
						<Typography variant='h5'>
							Instruments
						</Typography>
					</div>
					<div className={styles.blocks}>
						{instruments.map(({ name }) => (
							<InstrumentBlock
								className={styles.block}
								key={name}
								name={name}
							/>
						))}
						<AddInstrumentButton onClick={onAddInstrument} aria-label='Add instrument' />
					</div>
				</Paper>
			</div>
		);
	}
}
