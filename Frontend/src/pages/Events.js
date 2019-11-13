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
      result:[],
      noConection: false
    };
  }

  handleToUpdate(newState){
    this.setState({result:newState})
  }

  _fetchMovie(id){
    fetch('https://resvit.herokuapp.com/getEvents/?id='+id)
    .then(res => 
      res.json())
    .then(result => {
      const {events=[]}=result
      console.log("este es events",events)
      this.setState({result : events})
      console.log("este s resurlt", result)
    })        
  }

  componentDidMount(){
    try{
      const url = window.location.href
      let urlSplit = url.split('?')
      let idRestaurant = urlSplit[1].split('=')[1]
      console.log(idRestaurant)
      this._fetchMovie(idRestaurant)
    }
    catch(error){
      this.setState({noConection : true})
    }
  }


  render(){

    if(this.state.noConection == true){
      return(
        <div>
      <div className="Error-Page">
      <div className="row">
      <img src= {logo} className = "Error-Logo"></img>
      </div>
      <div className="row">
      <h1 className =" Error-Link">
              <a  href={"http://181.50.100.167:9000/login/"} className="link" >Intentalo de Nuevo</a>
      </h1>
      </div>
      </div>
      </div>
      )
    }
    return (
      <div> 
        <header className="App-header">
          <div className="Menu">
            <img src={logo} className="App-logo" alt="logo"/>
            <MenuR/>
            <br></br>
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