import React , {Component} from 'react';
import logo from '../images/RevitBlanco.png'
import {EventList} from '../components/EventsList'
import {MenuR} from '../components/MenuR'
import {Title} from'../components/Title'
import {Button } from 'semantic-ui-react'
import '../styles/menu.css'


export class Events extends Component {
    state={
        result:[]
    }

  _fetchMovie(){
    fetch('http://resvit.herokuapp.com/getEvents')
    .then(res => res.json())
    .then(result => {
      const {events=[]}=result
      this.setState({result : events})
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
        <br></br>
        <div className='Titulo'> 
          <Title>Eventos</Title>
          <div className="ui bottom attached button">
            <Button className='ui inverted secondary button' onClick={this._handleNew}>
              <i className="add icon"></i>
              Añadir Evento           
            </Button>
          </div>
        </div>
        <br></br>
        <div className='EventCard'>
          <EventList events={this.state.result}></EventList>
        </div>
      </div>
    );
  }
}