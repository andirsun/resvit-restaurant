import React, {Component} from 'react';
import{FormEvent} from '../components/FormEvent'
import {MenuR} from '../components/MenuR'
import {Title} from '../components/Title'
import logo from '../images/RevitBlanco.png'
import Calendar from 'react-calendar'
import {Link} from 'react-router-dom'
import '../styles/menu.css'
import '../styles/addEventStyle.css'
import { Segment , Button} from 'semantic-ui-react';

export class AddEvent extends Component{
    
    render(){
        const ruta='/Events'+this.props.idR
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
                    <div>
                    <Link to ='/Events' >
                        <Button className='ui inverted secondary button' >
                        <i className="angle double left icon"></i>
                        Volver           
                        </Button>
                    </Link>
                    </div>
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