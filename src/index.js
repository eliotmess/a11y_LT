import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AccessSite from './AccessSite';
import InAccessSite from './InAccessSite';

ReactDOM.render(
    <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/accessible" component={AccessSite} />
          <Route path="/inaccessible" component={InAccessSite} />
        </div>
    </Router>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
