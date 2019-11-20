import React , {Component} from 'react';
import logo from '../images/RevitBlanco.png'
import {EventList} from '../components/EventsList'
import {MenuR} from '../components/MenuR'
import {Title} from'../components/Title'
import {Button, Icon } from 'semantic-ui-react'
import '../styles/menu.css'
import '../styles/EventsPageStyle.css'
import {Link} from "react-router-dom";


export class Events extends Component {

  constructor(props) {
    super(props);
    this.handleToUpdate  = this.handleToUpdate.bind(this);
    this.state={
      result:[],
      noConection: false,
      idRes : '',
      noEvents: false,
      idUs : ''
    };
  }

  handleToUpdate(newState){
    this.setState({result:newState})
  }

  _fetchMovie(id){
    fetch('http://181.50.100.167:4000/getEvents/?id='+id)
    .then(res => 
      res.json())
    .then(response => {
      if ( response.content.length == 0){
        this.setState({noEvents : true})
      }else{
        this.setState({result : response.content})
        console.log("este s resurlt", response)
      }
    })        
  }

  componentDidMount(){
    try{
      const url = window.location.href
      let urlSplit = url.split('?')
      const idRestaurant = urlSplit[1].split('=')[1]
      const idUser =urlSplit[2].split('=')[1]
      this.setState({idRes : idRestaurant})
      this.setState({idUs : idUser})
      console.log("empezamos en eventos con estado :")
      console.log(this.state.idRes)
      console.log(this.state.idUs)
      this._fetchMovie(idRestaurant)
    }
    catch(error){
      this.setState({noConection : true})
    }
  }


  render(){
    const user="este"
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
          <div>
              <div className="nameUserAddD">
              <h2>{user || "inicia Sesión"}</h2>
              <div className="LogOutIconAddD" onClick={()=> this.logOut(this.state.idUser)}>
                  <Icon size={15} name="sign-out inverted"/>
              </div>
              </div>
          </div>
        </header>
        <div className="decorBar"></div>

        <div className="ui bottom attached button"> 
          <Title>Eventos</Title>
          <div>
            <Link to ={'/AddEvent/?id='+ this.state.idRes +'?id='+ this.state.idUs} >
                <Button className='ui inverted secondary button' >
                  <i className="add icon"></i>
                  Añadir Evento           
                </Button>
            </Link>
          </div>
        </div>
        <br></br>{
          (this.state.noEvents && <h1 align="center" >No hay eventos para mostrar</h1>)
        }
        <div className="main_contentEvent">
          <div className="containerEvent">
            <EventList events={this.state.result} action={this.handleToUpdate}></EventList>
          </div>
        </div>
      </div>
    );
  }
}