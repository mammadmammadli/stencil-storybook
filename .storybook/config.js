import { configure } from '@storybook/html';

const req = require.context('../src', true, /\.stories\.js$/);

function load () {
    req.keys().forEach(file => req(file));
}

configure(load, module);
