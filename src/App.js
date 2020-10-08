import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';


class App extends Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route path = '/' exact = {true} component = {Home}></Route>
          <Route path = '/groups' exact = {true} component = {GroupList}></Route>
        </Switch>
      </Router>
    )}
}

export default App;
