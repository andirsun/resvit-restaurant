import React , {Component} from 'react';
import {Title} from '../components/Title'
import {Link} from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import logo from '../images/RevitBlanco.png'
import {MenuR} from '../components/MenuR'
import '../styles/menu.css'
//import ScrollMenu from 'react-horizontal-scrolling-menu'

import {DecorationsList} from '../components/DecorationsList.js'

export class Decorations extends Component{
    
    state={
        resultado:[],
        idRes :'',
        idUser :'',
        noConection: false,
        noDecor : false
      };

    _fetchMovie(id){
        fetch('http://181.50.100.167:4000/getDecorations/?id='+ id)
        .then(res => res.json())
        .then(response =>{
            if (response.content.length == 0){
                this.setState({noDecor : true})
            }else{
            //const {decorations=[]}=response.content
            this.setState({resultado : response.content})
            //console.log("este es el response", decorations)
            console.log(this.state.resultado)
            }

        })
    }
    
      componentDidMount(){
        try{
            const url = window.location.href
            let urlSplit = url.split('?')
            let idRestaurant = urlSplit[1].split('=')[1]
            this.setState({idRes : idRestaurant})
            console.log(idRestaurant)
            this._fetchMovie(idRestaurant)

        }catch(err){
            this.setState({noConection : true})
            console.log("un Error Ocurrió")
        }
      }

    render(){
        if(this.state.noConection == true){
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
                    <Title>Decoraciones</Title>
                    <div>
                    <Link to ={'/AddDecoration/?id='+this.state.idRes} >
                        <Button className='ui inverted secondary button' >
                        <i className="add icon"></i>
                        Añadir Decoración           
                        </Button>
                    </Link>
                    </div>
                </div >
                <br></br>{
                    (this.state.noDecor && <h1 align="center" >No hay decoraciones para mostrar</h1> )
                }
                <div>
                <DecorationsList decorations={this.state.resultado}></DecorationsList>    
                </div>
            </div>
        )
    }
}