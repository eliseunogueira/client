import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/umd/popper';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
const Application = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
