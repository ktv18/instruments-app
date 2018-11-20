import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, selectV2 } from '@storybook/addon-knobs/react';
import { withCustomMuiTheme } from '../../HOC';
import Button_ from './Button';
const Button = withCustomMuiTheme(Button_);

const props = ({
	defaultText = 'Example',
} = {}) => ({
	children: text('Text', defaultText),
	disabled: boolean('Disabled', false),
	variant: selectV2('variant', { contained: 'contained', text: 'text' }, 'contained'),
	onClick: action('Clicked'),
});

storiesOf('Button', module)
	.add('with text', () => <Button {...props()} />)
	.add('with emoji', () => <Button {...props({ defaultText: '😎' })} />);
