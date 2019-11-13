import React, {Component} from 'react';
import {FormRestaurant} from '../components/FormRestaurat'
import {Title} from '../components/Title'
import {Link} from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import {MenuProfile} from '../components/MenuProfile'
import logo from '../images/RevitBlanco.png';
import '../styles/menu.css';
import '../styles/addRestaurantStyle.css'


export class AddRestaurant extends Component{
    render(){
        return(
            <div>
                <header className="App-header">
                <div className="Menu">
                <img src={logo} className="App-logo" alt="logo"/>
                <MenuProfile></MenuProfile>
                </div>
                </header>
                <div className="ui bottom attached button">
                    <Title>Añadir Usuario</Title>
                    <div>
                        <Link to ='/AddDecoration' >
                            <Button className='ui inverted secondary button' >
                            <i className="angle double left icon"></i>
                                Volver        
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="containerForm">
                    <FormRestaurant>
                    </FormRestaurant>
                </div>
            </div>
        )
    }
}