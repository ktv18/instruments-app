import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';

import FormDialog from './FormDialog';

const props = () => ({
	open: boolean('open', true),
});

storiesOf('FormDialog', module)
	.add('with text', () => <FormDialog {...props()} />);
