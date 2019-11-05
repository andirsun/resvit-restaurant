import React , {Component} from 'react';
import {Events} from './pages/Events'
// eslint-disable-next-line
import { AddEvent } from './pages/AddEvent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Decorations } from './pages/Decorations';
import {AddDecoration} from './pages/AddDecoration';
import {AdminProfile} from './pages/AdminProfile';
import {Principal} from './pages/Principal'


class App extends Component {

  render(){
    return (
      <div >
        <Route path="/Decorations" component = {Decorations}></Route>
        <Route path ="/Events" component ={Events}></Route>
        <Route path ="/AddEvent" component ={AddEvent}></Route>
        <Route path ="/AddDecoration" component ={AddDecoration}></Route>
        <Route path ="/AdminProfile" component ={AdminProfile}></Route>
        <Route path ="/Principal" component ={Principal}></Route>
      </div>
    );
  }
}

export default App;
