import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TypingApp from './typing/TypingApp';

switch (window.location.pathname) {
  case "/typing/":
    ReactDOM.render(<TypingApp />, document.getElementById('root'));
    break;

  case undefined:
  default:
    ReactDOM.render(<App />, document.getElementById('root'));
    break;
}
