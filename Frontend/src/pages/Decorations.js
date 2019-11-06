import React , {Component} from 'react';
import {Title} from '../components/Title'
import {Link} from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import logo from '../images/RevitBlanco.png'
import {MenuR} from '../components/MenuR'
//import ScrollMenu from 'react-horizontal-scrolling-menu'

import {DecorationsList} from '../components/DecorationsList.js'

export class Decorations extends Component{
    
    state={
        resultado:[]
      };

    _fetchMovie(){
        fetch('https://resvit.herokuapp.com/getDecorations/?id=1')
        .then(res => res.json())
        .then(response =>{ 
           const {decorations=[]}=response
           this.setState({resultado:decorations})
           console.log(this.state.resultado)

        })
    }
    
      componentDidMount(){
        this._fetchMovie()
      }

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
                    <Title>Decoraciones</Title>
                    <div>
                    <Link to ='/AddDecoration' >
                        <Button className='ui inverted secondary button' >
                        <i className="add icon"></i>
                        Añadir Decoración           
                        </Button>
                    </Link>
                    </div>
                </div >
                <br></br>
                <div>
                <DecorationsList decorations={this.state.resultado}></DecorationsList>    
                </div>
            </div>
        )
    }
}