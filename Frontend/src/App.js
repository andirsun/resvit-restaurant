import React , {Component} from 'react';
import {Events} from './pages/Events'
import { AddEvent } from './pages/AddEvent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Decorations } from './pages/Decorations';


class App extends Component {

  render(){
    return (
      <div >
        <Route path="/Decorations" component = {Decorations}></Route>
        <Route path ="/Events" component ={Events}></Route>
        <Route path ="/AddEvent" component ={AddEvent}></Route>
      </div>
    );
  }
}

export default App;
