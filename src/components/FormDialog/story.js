import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { withCustomMuiTheme } from '../../HOC';
import FormDialog_ from './FormDialog';
const FormDialog = withCustomMuiTheme(FormDialog_);

const props = () => ({
	open: boolean('open', true),
});

storiesOf('FormDialog', module)
	.add('with text', () => <FormDialog {...props()} />);
