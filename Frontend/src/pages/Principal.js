import React, {Component} from 'react';
import logo from '../images/RevitBlanco.png';
import {Title} from '../components/Title'
import '../styles/PrincipalStyle.css'
export class Principal extends Component{
    render(){
        return(
            <div>
                <header className="header">
                    <div className="Menu">
                    <img src={logo} className="App-logo" alt="logo"/> 
                    <div className="titlecss">
                        <h1>Bienvenido a resvit</h1>
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