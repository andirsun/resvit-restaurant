import React , {Component} from 'react';
import {Events} from './pages/Events'
import { AddEvent } from './pages/AddEvent';


class App extends Component {

  render(){

    return (
      <div >
        <AddEvent></AddEvent>
      </div>
    );
  }
}

export default App;
