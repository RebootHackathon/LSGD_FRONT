import React from 'react';
import ReactDOM from 'react-dom';
import Grants from './Grants';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grants/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
