import React, {Component} from 'react';
import logo from '../images/RevitBlanco.png';
import {Message } from 'semantic-ui-react'
import '../styles/PrincipalStyle.css'
import {Search}  from 'semantic-ui-react'
import {Title} from '../components/Title'
import {RestaurantsList} from '../components/RestauransList'
import '../styles/menu.css'

export class Principal extends Component{
    state={
        result: [],
        userName : '',
        door :'',
        idUser :'',
        noConection : false
    }

    fetchRestaurant(id){
        fetch('http://181.50.100.167:5000/getRestaurantsxCity/'+id)
        .then(res => res.json())
        .then(result => {
          const {Content=[]}=result
          this.setState({result : Content})
          console.log(this.state.result)
        })        
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
    
    validarUser(id,pass){
        fetch('http://181.50.100.167:4000/validateSession?id='+id)
        .then(res => res.json())
        .then(result =>{
            if (result.response == "1"){
                this.setState({door : true})
            }else{
                this.fetchUser(id)
            }
        })
    }

    componentDidMount(){
        try{
            let url = window.location.href;
            let urlSplit=url.split("?")
            console.log(urlSplit)       
            let idUser = urlSplit[1].split("=")[1];
            let password = urlSplit[2].split("=")[1]
            let idCiudad = urlSplit[3].split("=")[1]
            console.log(idUser,password,idCiudad)
            if(idUser == '' || password == '' || idCiudad == ''){
                this.setState({door : true})
            }else{

                this.setState({idUser :idUser})
                this.validarUser(idUser,password);
                this.fetchRestaurant(idCiudad);
            }
        }catch(err){
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

    render(){
        const user = this.state.userName
        console.log("el usuario",user)
        if(this.state.door == true){
           return( <Message negative>
            <Message.Header> Error</Message.Header>
            <a  href={"http://181.50.100.167:9000/login/"}>
            <p>
               No no ha iniciado Sesión. Inicia sesión
            </p>
            </a>
        </Message>             
           )}
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
                <header className="headerp">
                    <div className="Menup">
                        <img src={logo} className="ellogo" alt="logo"/> 
                        <div className="titlecss">
                            <h1>Bienvenido a RESVIT</h1>
                            <Search results={this.state.result}></Search>
                        </div> 
                    </div>
                    <div>
                        <div className="nameUser">
                        <h2>{user || "inicia Sesión"}</h2>
                        </div>
                        <div className="LogOutIcon" onClick={()=> this.logOut(this.state.idUser)}>
                            <i size={40} className="log out icon inverted"/>
                        </div>
                    </div>
                </header>
                <div className="decorBar"></div>
                <div className="cuerpo">
                <RestaurantsList restaurants={this.state.result} user={this.state.idUser}></RestaurantsList>
                </div>
            </div>
            

        )
    }
}