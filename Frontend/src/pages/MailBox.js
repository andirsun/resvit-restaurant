import React , {Component} from 'react';
import {MenuR} from '../components/MenuR'
import logo from '../images/RevitBlanco.png'
import {Title} from '../components/Title'
import '../styles/menu.css'
import {Button, Icon} from 'semantic-ui-react'
import { MailsList } from '../components/MailsList';
export class MailBox extends Component{

    state ={
        result : [],
        noConection : false,
        noMail : false,
        userName: ''
    }

    _fetchMail(id){
        fetch('http://159.65.58.193:8000/api/getCommentsByRestaurantId/'+id)
        .then(res => 
          res.json())
        .then(res => {
            if (res.Content.length == 0){
                this.setState({noMail : true})
            }else{
                this.setState({result : res.Content})
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

    componentDidMount(){
        try{
            const url = window.location.href
            let urlSplit = url.split('?')
            const idRestaurant = urlSplit[1].split('=')[1]
            const idUser =urlSplit[2].split('=')[1]
            this.setState({idRes : idRestaurant})
            this.setState({idUs : idUser})
            console.log("empezamos en eventos con estado :", this.state)
            console.log(this.state.idRes)
            console.log(this.state.idUs)
            this._fetchMail(idRestaurant)
            this.fetchUser(idUser)
          }
          catch(error){
            this.setState({noConection : true})
          }       
    }
    render(){
        const user=this.state.userName
        return(
            <div>
                <header className="App-header">
                <div className="Menu">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <MenuR/>
                    <br></br>
                </div>
                <div>
                    <div className="nameUserM">
                    <h2>{user || "inicia Sesión"}</h2>
                    <div className="LogOutIconM" onClick={()=> this.logOut(this.state.idUser)}>
                        <Icon size={15} name="sign-out inverted"/>
                    </div>
                    </div>
                </div>
                </header>
                <div className="decorBar"></div>
                <div className="ui bottom attached button">
                    <Title>Te han Escrito tus Clientes</Title>
                    <div>
                    <Button className='ui inverted secondary button' >
                    <i className="facebook messenger icon"></i>
                    Responder          
                    </Button>
                    </div>
                </div >
                <br></br>{(this.state.noMail && <h1 align="center" >No hay Mensajes para mostrar</h1>)}
                <MailsList
                 contenido = {this.state.result}
                ></MailsList>
            </div>
        )
    }
}