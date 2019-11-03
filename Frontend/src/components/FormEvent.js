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

    _handleSubmit=(e)=>{
        console.log(this.state)
        const {idRestaurant,name,date,type}=this.props
        var params ={
            idRestaurant: {idRestaurant},
            name: {name},
            date: {date},
            type:{type}        
        };

        var formData = new FormData();
        for (var k in params){
            let encodedkey = encodeURIComponent(k);
            let encondedValue  = encodeURIComponent(params[k]);
           
        }

        var request ={
            method: 'POST',
            //mode: 'cors',
            headers:{
                //"Acceses-Control-Allow-Origin":'*',
                //'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
				"Content-type": "application/json"
            },
            body : params
        }

        fetch('https://resvit.herokuapp.com/addEvent',request)
        .then(response => console.log(response))
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
                    <Button className='ui inverted secondary button' type='submit'>Guardar</Button>
                </Form>              
            </div>
            </Segment>
        )
    }
}