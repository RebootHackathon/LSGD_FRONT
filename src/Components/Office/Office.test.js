import React from 'react';
import ReactDOM from 'react-dom';
import Office from './Office';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Office />, div);
  ReactDOM.unmountComponentAtNode(div);
});