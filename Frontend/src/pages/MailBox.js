import React , {Component} from 'react';
import {MenuR} from '../components/MenuR'
import logo from '../images/RevitBlanco.png'
import {Title} from '../components/Title'
import '../styles/menu.css'
import {Button} from 'semantic-ui-react'

export class MailBox extends Component{

    render(){
        return(
            <div>
                <header className="App-header">
                <div className="Menu">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <MenuR/>
                    <br></br>
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
            </div>
        )
    }
}