import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupForm from './GroupForm';


class App extends Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route path = '/' exact = {true} component = {Home}></Route>
          <Route path = '/groups' exact = {true} component = {GroupList}></Route>
          <Route path = "/groups/:id" component = {GroupForm}/>
        </Switch>
      </Router>
    )}
}

export default App;
