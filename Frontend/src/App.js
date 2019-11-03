import React , {Component} from 'react';
import {Events} from './pages/Events'
// eslint-disable-next-line
import { AddEvent } from './pages/AddEvent';


class App extends Component {

  render(){

    return (
      <div >
        <Events></Events>
      </div>
    );
  }
}

export default App;
