import React, {Component} from 'react';
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'
export class FormRestaurant extends Component{
    state ={
        nombre :'',
        descripcion :'--',
        ciudad :'',
        telefono :'--',
        correo :'--',
        direccion :'--',
        horario:'--',
        idRestaurant:'',
        contrasena: '',
        tipoU:'',



    }

    handleChangeNres=(e)=>{
        console.log(e.target.value)
    }
    handleChangeCity=(e)=>{
        console.log(e.target.value)   
    }
    handleChangeMail=(e)=>{
        console.log(e.target.value)
    }
    handleChangeNuser=(e)=>{
        console.log(e.target.value)
    }
    handleChangePass=(e)=>{
        console.log(e.target.value)
    }
    handleChangeTypeUser=(e, {value})=>{
        console.log(value)
    }

    createRestaurant(){
        const params= {
            name: this.state.nombre,
            description: this.state.descripcion,
            city_id: this.state.ciudad,
            telephone: this.state.telefono,
            email: this.state.correo,
            address: this.state.direccion,
            schedule: this.state.horario
        };

        var request ={
            method: 'POST',
            body : params
        }

        fetch('http://181.50.100.167:5000/postRestaurant', request)
        .then(res=> res.json())
        .then(res =>{
            console.log("aqui se creo el restaurante", res)
            this.setState({idRestaurant : res})
        })
    }

    createUserRestaurant(){
        const params= {
            userName: this.state.nombre,
            email: this.state.correo,
            password: this.state.contrasena,
            userType : this.state.tipoU,
            idRestaurant : this.state.idRestaurant
        };

        var request ={
            method: 'POST',
            body : params
        }
        fetch('http://181.50.100.167:4001/AddUserRestaurant', request)
        .then(res => res.json())
        .then(res =>{
            console.log("aqui se cre usuario restaurante", res)
        })
    }

    passEncry(pass){
        fetch('http://159.65.58.193:3000/crypto/'+ pass)
        .then(res => res.json())
        .then(res =>{
            console.log("contra encriptada", res.content)
        })
    }

    makeUser(){
        
    }
    render(){
        const options=[
            {key: 2, text: 'Usuario Restaurante', value : 2},
            {key: 1, text: 'Usuario Comensal', value : 1},
            {key: 3, text: 'Usuario Administrador', value : 3}
        ]
        return(
            <Segment>
                <Form onSubmit={ this.makeUser}>
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-name-res'
                    label='Nombre Restaurante'
                    control={Input}
                    placeholder='Asigne un nombre de Restaurante, será modificable'
                >
                    <input onChange={this.handleChangeNres} />
                </Form.Field>
                <Form.Field
                    id='form-input-control-city'
                    control={Input}
                    label='Ciudad'
                    placeholder='Es numérica'
                >
                    <input onChange={this.handleChangeCity} />
                </Form.Field>
                 </Form.Group>
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Nombre Usuario'
                    placeholder='Asigne un nombre de Usuario, será modificable'
                >                    
                <input onChange={this.handleChangeNuser} />
                </Form.Field>
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Contraseña'
                    placeholder='Asigne una contraseña, será provisional'
                >
                    <input onChange={this.handleChangePass} />
                </Form.Field>
                 </Form.Group>
                <Form.Group widths='equal'>
                <Form.Select
                    fluid
                    label='Tipo Usuario'
                    options={options}
                    placeholder='ej.Usuario Restaurante'
                    value ={options.value}
                    onChange={this.handleChangeTypeUser}
                /> 
                <Form.Field
                    id='form-input-control-mail'
                    control={Input}
                    label='Coreo Electrónico'
                    placeholder='miRestaurante@gmail.com'
                > 
                <input onChange={this.handleChangeMail} />
                </Form.Field>               
                </Form.Group>               
                <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Agregar'
                label='Guardar Nuevo Usuario'
                />
            </Form>
          </Segment>
        )
    }
    
}