import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Routes from './App';


ReactDOM.render(
  <Router>
    <Routes/>
  </Router>,
  document.getElementById('root')
);
