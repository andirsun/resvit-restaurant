import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export class FormEvent extends Component{

    state = {
        idRestaurant : '1',
        name : '',
        startDate: new Date(),
        type: ''
    }
     
    handleChange = (date) => {
        this.setState({
          startDate: date
        });
    }
    
    handleChangeName = (e) => {
        e.preventDefault()
        this.setState({
          name: e.target.value
        });
    }

    handleChangeType = (e) => {
        e.preventDefault()
        this.setState({
          type: e.target.value
        });
    }
    handleFileSelect=(e)=>{
        console.log(e.target.files[0])
    }

    _handleSubmit=(e)=>{
        var idRestaurant1 = this.state.idRestaurant
        var name1 = this.state.name
        var date1 = this.state.startDate
        var type1 = this.state.type
        var params ={
            idRestaurant: idRestaurant1,
            name: name1,
            date: date1,
            type: type1        
        };
        console.log(params)
        var request ={
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
				"Content-type": "application/json"
            },
            body : JSON.stringify(params)
        }
        console.log(request)
        fetch('https://resvit.herokuapp.com/addEvent',request)
        .then(response =>              )
        .catch(err => console.log(err));
          
    }

    
    render(){
        return(
            <Segment>
            <div >
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
                    <Form.Field>
                        <label>Sube una imagen</label>
                        <input type="file" onChange={this.handleFileSelect} />
                    </Form.Field>
                    <Button className='ui inverted secondary button' type='submit'>Guardar</Button>
                </Form>              
            </div>
            </Segment>
        )
    }
}