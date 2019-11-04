import React, {Component} from 'react';
import{FormEvent} from '../components/FormEvent'
import {MenuR} from '../components/MenuR'
import {Title} from '../components/Title'
import logo from '../images/RevitBlanco.png'
import Calendar from 'react-calendar'
import '../styles/menu.css'
import '../styles/addEventStyle.css'
import { Segment } from 'semantic-ui-react';

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
                <div className="main_content">
                    <div className='container2' >
                    <Segment>
                    <Calendar></Calendar>
                    </Segment>
                    </div>  
                    <div className='container'>
                    <FormEvent></FormEvent>
                    </div>  
                </div>
            </div>
        )
    }
}