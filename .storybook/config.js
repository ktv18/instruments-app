import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';

import '../public/css/reboot.css';


setOptions({
	name: 'Instruments App',
	url: 'https://github.com/ktv18/instruments-app',
});

addDecorator(withKnobs);

const req = require.context('../src', true, /story\.js$/);
const loadStories = () => req.keys().forEach(req);
configure(loadStories, module);
