import React, {Component} from 'react';
import logo from '../images/RevitBlanco.png';
import '../styles/PrincipalStyle.css'
import {Search}  from 'semantic-ui-react'
export class Principal extends Component{
    state={
        result:[]
    }

    fetchRestaurant(){
        
    }

    componentDidMount(){
        this.fetchRestaurant();
    }
    render(){
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
                        <h2>NombreUsuario</h2>
                        <i className="log out icon"/>
                    </div>
                </header>
                <div className="decorBar"></div>
                <div>
                    <RestaurantList restorant={this.state.result}></RestaurantList>
                </div>
            </div>
            

        )
    }
}