import React, {Component} from 'react';
import{FormEvent} from '../components/FormEvent'
import {MenuR} from '../components/MenuR'
import {Title} from '../components/Title'
import logo from '../images/RevitBlanco.png'
import '../styles/menu.css'

export class AddEvent extends Component{
    
    render(){

        return(
            
            <div>
                <header className="App-header">
                <div className="Menu">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <MenuR/>
                </div>
                </header>
                <div className="decorBar"></div>
                <div className="ui bottom attached button">
                    <Title>Añadir Evento</Title>
                </div>
                <br></br>
                <div className='Center'>
                <FormEvent></FormEvent>
                </div>
            </div>
        )
    }
}