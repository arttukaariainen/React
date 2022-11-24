import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login} from "./Login"
import { Register } from './Register';
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { Login } from './Login';
import { browserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [token, setToken] = useState();

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
        <browserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
            </Route>
          </Switch>
        </browserRouter>
    </div>
  );
}

export default App;
