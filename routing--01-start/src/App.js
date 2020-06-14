import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}
/* BrowserRouter, Route, Link, NavLink, Switch, Redirect, withRouter*/ /* flexible id,nested routes */
/* react-router passes "history", "location", "match" objects*/
/* relative path - takes a page,you currently on and appends other path at the end */
/* "Switch" - loading one of the routes,the first that matches */
export default App;
