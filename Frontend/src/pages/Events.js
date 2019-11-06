import React , {Component} from 'react';
import logo from '../images/RevitBlanco.png'
import {EventList} from '../components/EventsList'
import {MenuR} from '../components/MenuR'
import {Title} from'../components/Title'
import {Button } from 'semantic-ui-react'
import '../styles/menu.css'
import '../styles/EventsPageStyle.css'

import {Link} from "react-router-dom";


export class Events extends Component {

  constructor(props) {
    super(props);
    this.handleToUpdate  = this.handleToUpdate.bind(this);
    this.state={
      result:[]
    };
  }

  handleToUpdate(newState){
    this.setState({result:newState})
  }

  _fetchMovie(){
    fetch('http://resvit.herokuapp.com/getEvents/?id=1')
    .then(res => res.json())
    .then(result => {
      const {events=[]}=result
      this.setState({result : events})
      console.log(this.state.result)
    })        
  }

  componentDidMount(){
    this._fetchMovie()
  }


  render(){

    return (
      <div> 
        <header className="App-header">
          <div className="Menu">
            <img src={logo} className="App-logo" alt="logo"/>
            <MenuR/>
          </div>
        </header>
        <div className="decorBar"></div>

        <div className="ui bottom attached button"> 
          <Title>Eventos</Title>
          <div>
            <Link to ='/AddEvent' >
                <Button className='ui inverted secondary button' >
                  <i className="add icon"></i>
                  Añadir Evento           
                </Button>
            </Link>
          </div>
        </div>
        <br></br>
        <div className="main_contentEvent">
          <div className="containerEvent">
            <EventList events={this.state.result} action={this.handleToUpdate}></EventList>
          </div>
        </div>
      </div>
    );
  }
}