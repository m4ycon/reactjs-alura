import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/authors" component={Authors} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
