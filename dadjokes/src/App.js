import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Jokes from './components/Jokes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link className="signup-link" to="/">Sign Up</Link>
        <Link className="signin-link" to="/signin">Sign In</Link>
        <Link className="jokes-link" to="/jokes">Jokes</Link>
       

        <Route exact path="/" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/jokes" component={Jokes} />
             </Router>
    </div>
  );
}
export default App;