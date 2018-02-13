import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TypingApp from './typing/TypingApp';


// Copied from http:jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var urlParams = getUrlVars();

switch (urlParams["page"]) {
  case "typing":
    ReactDOM.render(<TypingApp />, document.getElementById('root'));
    break;

  case undefined:
  default:
    ReactDOM.render(<App />, document.getElementById('root'));
    break;
}
