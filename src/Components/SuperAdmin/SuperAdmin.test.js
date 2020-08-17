import React from 'react';
import ReactDOM from 'react-dom';
import SuperAdmin from './SuperAdmin';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SuperAdmin/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
