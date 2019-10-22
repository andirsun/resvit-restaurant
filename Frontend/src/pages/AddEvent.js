import React, {Component} from 'react';
import{FormEvent} from '../components/FormEvent'
import {Title} from '../components/Title'

export class AddEvent extends Component{
    
    render(){
        return(
            <div>
                <Title>Añadir Evento</Title>
                <FormEvent></FormEvent>
            </div>
        )
    }
}