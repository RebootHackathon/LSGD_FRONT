import React from 'react';
import ReactDOM from 'react-dom';
import MongoCharts from './MongoCharts';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MongoCharts />, div);
  ReactDOM.unmountComponentAtNode(div);
});