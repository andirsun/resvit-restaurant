import React , {Component} from 'react';
import {Title} from '../components/Title'
import {Link} from 'react-router-dom'
import { Button, Icon} from 'semantic-ui-react'
import logo from '../images/RevitBlanco.png'
import {MenuR} from '../components/MenuR'
import '../styles/menu.css'
//import ScrollMenu from 'react-horizontal-scrolling-menu'

import {DecorationsList} from '../components/DecorationsList.js'

export class Decorations extends Component{
    
    state={
        resultado:[],
        idRes :'',
        idUser :'',
        noConection: false,
        noDecor : false,
        userName :''
      };

    _fetchMovie(id){
        fetch('http://181.50.100.167:4000/getDecorations/?id='+ id)
        .then(res => res.json())
        .then(response =>{
            if (response.content.length == 0){
                this.setState({noDecor : true})
            }else{
            //const {decorations=[]}=response.content
            this.setState({resultado : response.content})
            //console.log("este es el response", decorations)
            console.log(this.state.resultado)
            }

        })
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
                window.location.replace('http://159.65.58.193:3000/login/')
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
    
      componentDidMount(){
        try{
            const url = window.location.href
            let urlSplit = url.split('?')
            let idRestaurant = urlSplit[1].split('=')[1]
            let idUs = urlSplit[2].split('=')[1]
            this.setState({idRes : idRestaurant})
            this.setState({idUser : idUs})
            console.log(idRestaurant)
            this._fetchMovie(idRestaurant)
            this.fetchUser(idUs)

        }catch(err){
            this.setState({noConection : true})
            console.log("un Error Ocurrió")
        }
      }

    render(){
        const user=this.state.userName
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
                    <Title>Decoraciones</Title>
                    <div>
                    <Link to ={'/AddDecoration/?id='+this.state.idRes + '?id='+ this.state.idUser} >
                        <Button className='ui inverted secondary button' >
                        <i className="add icon"></i>
                        Añadir Decoración           
                        </Button>
                    </Link>
                    </div>
                </div >
                <br></br>{
                    (this.state.noDecor && <h1 align="center" >No hay decoraciones para mostrar</h1> )
                }
                <div>
                <DecorationsList decorations={this.state.resultado}></DecorationsList>    
                </div>
            </div>
        )
    }
}