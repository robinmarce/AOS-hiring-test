import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SuccessPage from './components/SuccessPage/SuccessPage';
import LoginPage from './components/LoginPage/LoginPage';

const Success = () => (
<SuccessPage />
);

const Login = () => (
<LoginPage />
);

class App extends Component {

    render() {
      return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route path="/success" component={Success} />
          </div>
        </Router>
      );
    }
  }

export default App;
