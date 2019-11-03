import React , {Component} from 'react';
import {FormDecoration} from '../components/FormDecoration.js'
import {Title} from '../components/Title'
//import ScrollMenu from 'react-horizontal-scrolling-menu'
import '../styles/DecorationsPageStyle.css'

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
                </div >
                <div>
                <DecorationsList decorations={this.state.resultado}></DecorationsList>    
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