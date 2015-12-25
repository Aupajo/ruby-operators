import React from "react";
import {render} from 'react-dom';
import { createHistory, useBasename } from 'history'
import { Router, Route, Link, NoMatch, Redirect, IndexRoute, IndexRedirect } from 'react-router'

import Home from "./home";

const history = useBasename(createHistory)({
    basename: '/'
});

var App = React.createClass({
    render: function() {
        return (
            <div>
              {this.props.children}
            </div>
        );
    }
});

render((
  <Router  history={history}>
    <Route path="/" component={App}>
      <IndexRedirect from="/" to="/spaceship"/>
      <Route path="home" component={Home} />
    </Route>
  </Router>
), document.getElementById('container'))
