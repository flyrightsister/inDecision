import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Decide from './pages/Decide'
import Login from './pages/Login'
import './App.css'
import {authCode, state} from './util/queryParams'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: authCode
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div className="app-parent">
          <Switch>
            <Route exact path="/" render={() => (
              (this.state.loggedIn !== "") ? (
                <Redirect to="/decide"/>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
            <Route path="/login" component={Login}/>
            <Route path="/decide" component={Decide}/>
            <Route path="/home" component={Home}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
