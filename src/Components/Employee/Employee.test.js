import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Employee />, div);
  ReactDOM.unmountComponentAtNode(div);
});