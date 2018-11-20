import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { withCustomMuiTheme } from '../../HOC';
import SelectBox_ from './SelectBox';
const SelectBox = withCustomMuiTheme(SelectBox_);
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

const name = 'type';
const defaultlabel = 'some default label';
const defaultNonelabel = 'none';

const props = () => ({
	options,
	name,
	outlined: boolean('outlined', true),
	disabled: boolean('disabled', false),
	error: boolean('error', false),
	label: text('label', defaultlabel),
	noneLabel: text('none', defaultNonelabel),
	onChange: () => {},
});

storiesOf('SelectBox', module)
	.add('with text', () => <SelectBox {...props()} />);
