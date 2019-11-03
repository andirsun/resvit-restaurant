import React , {Component} from 'react';
import {FormDecoration} from '../components/FormDecoration.js'
import {Title} from '../components/Title'

export class Decorations extends Component{



    render(){
        return(
            <div>
                <div className="ui bottom attached button">
                    <Title>Decoraciones</Title>
                </div >
                <br></br>
                <div className="main_content">
                    <div className='container'>
                        <FormDecoration></FormDecoration>
                    </div>
                </div>
            </div>
        )
    }
}