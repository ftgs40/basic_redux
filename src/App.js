import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import List from './pages/list'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;
