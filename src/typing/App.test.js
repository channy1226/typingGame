import React from 'react';
import ReactDOM from 'react-dom';
import TypingApp from './TypingApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypingApp />, div);
});
