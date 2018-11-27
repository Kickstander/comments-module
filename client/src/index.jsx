require('newrelic');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NavBar from './components/NavBar';

ReactDOM.render(<App />, document.getElementById("comments"));
ReactDOM.render(<NavBar />, document.getElementById("navbar"));
