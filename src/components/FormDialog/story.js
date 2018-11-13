import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, selectV2 } from '@storybook/addon-knobs/react';

import FormDialog from './FormDialog';

const props = () => ({
	open: boolean('open', false),
	title: text('title', 'some title'),
	onClose: () => {},
});

storiesOf('FormDialog', module)
	.add('with text', () => <FormDialog {...props()} />);
