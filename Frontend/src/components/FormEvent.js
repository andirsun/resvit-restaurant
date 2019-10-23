import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export class FormEvent extends Component{

    state = {
        startDate: new Date()
    };
     
    handleChange = date => {
        this.setState({
          startDate: date
        });
    };
    
    render(){
        return(
            <div>
                <Form>
                    <Form.Field>
                        <label>Nombre de Evento</label>
                        <input placeholder='Nombre del Evento' />
                    </Form.Field>
                    <Form.Field>
                        <label>Tipo</label>
                        <input placeholder='Tipo del evento ej. teatro, musica' />
                    </Form.Field>
                    <Form.Field>
                        <label>Fecha</label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}/>
                    </Form.Field>
                    <Button className='ui inverted secondary button' type='submit'>Submit</Button>
                </Form>              
            </div>
        )
    }
}