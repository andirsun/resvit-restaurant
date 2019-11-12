import React, {Component} from 'react';
import logo from '../images/RevitBlanco.png';
import '../styles/PrincipalStyle.css'
import {Search}  from 'semantic-ui-react'
import {Title} from '../components/Title'
import {RestaurantsList} from '../components/RestauransList'

export class Principal extends Component{
    state={
        result: [],
        userName : ''
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

    componentDidMount(){
        let url = window.location.href;
        let urlSplit=url.split("=")
        let idCiudad = urlSplit[1];
        this.fetchRestaurant("2");
        this.fetchUser(idCiudad)
    }
    render(){
        const user = this.state.userName
        console.log("el usuario",user)
        return(
            <div>
                <header className="headerp">
                    <div className="Menup">
                    <img src={logo} className="ellogo" alt="logo"/> 
                    <div className="titlecss">
                        <h1>Bienvenido a RESVIT</h1>
                        <Search></Search>
                    </div> 
                    </div>
                    <div className="LogOutIcon">
                        <Title>{user || "inicia Sesión"}</Title>
                        <i className="log out icon"/>
                    </div>
                </header>
                <div className="decorBar"></div>
                <div>
                <RestaurantsList restaurants={this.state.result}></RestaurantsList>
                </div>
            </div>
            

        )
    }
}