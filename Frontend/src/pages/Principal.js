import React, {Component} from 'react';
import logo from '../images/RevitBlanco.png';
import {Title} from '../components/Title'
import '../styles/PrincipalStyle.css'
import {Search}  from 'semantic-ui-react'
export class Principal extends Component{
    render(){
        return(
            <div>
                <header className="header">
                    <div className="Menu">
                    <img src={logo} className="App-logo" alt="logo"/> 
                    <div className="titlecss">
                        <h1>Bienvenido a RESVIT</h1>
                        <Search></Search>
                    </div> 
                    </div>
                </header>
                <div className="decorBar"></div>
                <div>
                    <p></p>
                </div>
            </div>
            

        )
    }
}