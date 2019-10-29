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
            date:{date},
            type:{type}        
        };
        var formData = new FormData();
        for (var k in params){
            formData.append(k,params[k]);
        }

        var request ={
            method: 'POST',
            headers:{
				"Content-type": "application/x-www-form-urlencoded"
            },
            body : formData
        }
        fetch('https://resvit.herokuapp.com/addEvent', request).then(
            console.log("acabo")
        )
          
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
                    <Button className='ui inverted secondary button' type='submit'>Submit</Button>
                </Form>              
            </div>
            </Segment>
        )
    }
}