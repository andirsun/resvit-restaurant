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
    state={
        idRes : '',
        idUser: '',
        noConection : false
    }
    componentDidMount(){
        try{
            const url = window.location.href
            let urlSplit = url.split('?')
            let idRestaurant = urlSplit[1].split('=')[1]
            this.setState({idRes : idRestaurant})
        }catch(err){
            this.setState({noConection: true})
        }
    }   
    render(){

        if( this.state.noConection == true){
            return(
                <div>
                    <div className="Error-Page">
                        <div className="row">
                        <img src= {logo} className = "Error-Logo"></img>
                        </div>
                        <div className="row">
                        <h1 className =" Error-Link">
                                <a  href={"http://181.50.100.167:9000/login/"} className="link" >Intentalo de Nuevo</a>
                        </h1>
                        </div>
                    </div>
                </div>
            )
        }
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
                    <Link to ={'/Decorations/?id='+this.state.idRes} >
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