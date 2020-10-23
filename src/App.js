import React from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    
    <div> 
      <div>
        <div class="section">
          <div class="header">
            <div class="card">
              <h1>Hello</h1>
              <h1>My name is Miranda Ransom</h1>
            </div>
          </div>
          <div class="body">
            <h3>Connect With Me</h3>
            <div class="grid-container">
              <div class="grid-item" id="github-link">1</div>
              <div class="grid-item" id="linkdin-link">2</div>
              <div class="grid-item" id="gmail-link">3</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );  
}

export default App;
