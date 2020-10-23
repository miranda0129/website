import React from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>

        <div class="nav">
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/Articles">Articles</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
      <hr />

    
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />
      </Switch>
    
      
    </BrowserRouter>
    
  );  
}

export default App;
