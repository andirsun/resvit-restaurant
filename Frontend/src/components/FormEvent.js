import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export class FormEvent extends Component{

    state = {
        idRestaurant : '1',
        name : '',
        type: '',
        startDate: ''
    };
     
    handleChange = (date) => {
        this.setState({
          startDate: date
        });
        console.log(this.state.startDated)
    };
    handleChangeName = (e) => {
        this.setState({
          name: e.target.value
        });
        console.log(this.state.name)
    };
    handleChangeType = (e) => {
        this.setState({
          type: e.target.value
        });
        console.log(this.state.type)
    };

    _handleSubmit=(e)=>{
        const {id,name,type,date}=this.props
        fetch('https://resvit.herokuapp.com/addEvent', {
            method: 'POST',
            body: JSON.stringify({
              idRestaurant: {id},
              name: {name},
              date:{date},
              type:{type}
            })
          }).then(response =>{
              console.log(response)
          })
    }

    
    render(){
        return(
            <div>
                <Form onSubmit={this._handleSubmit}>
                    <Form.Field>
                        <label>Nombre de Evento</label>
                        <input placeholder='Nombre del Evento' onChange={this.handleChangeName}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Tipo</label>
                        <input placeholder='Tipo del evento ej. teatro, musica' onChange={this.handleChangeType} />
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