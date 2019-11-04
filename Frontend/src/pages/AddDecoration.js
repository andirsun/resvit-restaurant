import React, {Component} from 'react';
import{FormDecoration} from '../components/FormDecoration'
import {MenuR} from '../components/MenuR'
import {Title} from '../components/Title'
import logo from '../images/RevitBlanco.png'
import {Link} from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import '../styles/menu.css'
import '../styles/addEventStyle.css'
import '../styles/DecorationsPageStyle.css'

export class AddDecoration extends Component{
    
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
                    <Title>Añadir Decoración</Title>
                    <div>
                    <Link to ='/Decorations' >
                        <Button className='ui inverted secondary button' >
                        <i className="angle double left icon"></i>
                        Volver           
                        </Button>
                    </Link>
                    </div>
                </div>
                <br></br>
                <div className="main_contentD"> 
                    <div className='containerD'>
                    <FormDecoration></FormDecoration>
                    </div>  
                </div>
            </div>            
        )
    }
}