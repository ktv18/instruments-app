import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import TextInput from './TextInput';

const props = () => ({
	error: boolean('error', false),
	label: text('label', 'Cost'),
	placeholder: text('label', 'Cost'),
	helperText: text('description', 'some description'),
	errorMessage: text('error message', 'Please fill the field'),
	onChange: () => {},
});

storiesOf('TextInput', module)
	.add('with label', () => <TextInput {...{ ...props(), placeholder: '' }} />)
	.add('with placeholder', () => <TextInput {...{ ...props(), label: '' }} />)
	.add('multiline', () => <TextInput {...{ ...props(), placeholder: '', multiline: true }} />);
