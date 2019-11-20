import React, {Component} from 'react';
import{FormEvent} from '../components/FormEvent'
import {MenuR} from '../components/MenuR'
import {Title} from '../components/Title'
import logo from '../images/RevitBlanco.png'
import Calendar from 'react-calendar'
import {Link} from 'react-router-dom'
import '../styles/menu.css'
import '../styles/addEventStyle.css'
import { Segment , Button, Icon} from 'semantic-ui-react';

export class AddEvent extends Component{
    state={
        idRes : '',
        idUser: '',
        noConection : false,
        userName :''
    }
    componentDidMount(){
        try{
            const url = window.location.href
            let urlSplit = url.split('?')
            let idRestaurant = urlSplit[1].split('=')[1]
            let idUs = urlSplit[2].split("=")[1]
            if(true){
            this.setState({idRes : idRestaurant})
            this.setState({idUser : idUs})}
            this.fetchUser(idUs)
        }catch(err){
            console.log("ocurrio error en AddEvent")
            this.setState({noConection : true})
            
        }
    }

    logOut(id){
        var request ={
            method : 'POST'
        }
        fetch('http://181.50.100.167:4000/logout?id='+id,request)
        .then(res=> res.json())
        .then(response =>   {
            console.log(response)
            if (response.response == 2){
                console.log("cerro la sesión")
                window.location.reload()
            }
        }
        )
    }
    fetchUser(id){
      fetch('http://181.50.100.167:4000/getNameUser?id='+id)
      .then(res => res.json())
      .then(result => {
          const name=result.content.name
          console.log("este es el contenido",result.content)
          this.setState({userName:name})
          console.log("este es el estado", this.state.userName)
      }) 
  
    }
    
    render(){
        const idU = this.state.idUser
        const idR = this.state.idRes
        const ruta='/Events/?id='+ idR + '?id=' + idU
        const user=this.state.userName
        console.log("aqui se fue el id restaurante", idR)
        if( this.state.noConection == true){
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
        return(
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
                    <Title>Añadir Evento</Title>
                    <div>
                    <Link to ={ruta} >
                        <Button className='ui inverted secondary button' >
                        <i className="angle double left icon"></i>
                        Volver           
                        </Button>
                    </Link>
                    </div>
                </div>
                <br></br>
                <div className="main_content">
                    <div className='container2' >
                    <Segment>
                    <Calendar></Calendar>
                    </Segment>
                    </div>  
                    <div className='container'>
                    <FormEvent restaurant = {idR}></FormEvent>
                    </div>  
                </div>
            </div>
        )
    }
}