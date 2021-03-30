import React from "react";
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages";

function App() {
  return (
    <Router>
        <Switch>
            <Route path='/' component={Home} exact/>
        </Switch>
    </Router>
  );
}

export default App;


// <header className="App-header">
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//   >
//     Learn React
//   </a>