import React , {Component} from 'react';
import {Title} from '../components/Title'
import {Link} from 'react-router-dom'
import { Button} from 'semantic-ui-react'
//import ScrollMenu from 'react-horizontal-scrolling-menu'

import {DecorationsList} from '../components/DecorationsList.js'

export class Decorations extends Component{
    
    state={
        resultado:[]
      };

    _fetchMovie(){
        fetch('http://resvit.herokuapp.com/getDecorations/?id=2')
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
                <div>
                <DecorationsList decorations={this.state.resultado}></DecorationsList>    
                </div>
            </div>
        )
    }
}