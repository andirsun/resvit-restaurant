import React, {Component} from 'react';
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'
export class FormRestaurant extends Component{

    render(){
        const options=[
            {key: 2, text: 'Usuario Restaurante', value : 2},
            {key: 1, text: 'Usuario Comensal', value : 1},
            {key: 3, text: 'Usuario Administrador', value : 3}
        ]
        return(
            <Segment>
                <Form>
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Nombre Usuario'
                    placeholder='First name'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Contraseña'
                    placeholder='Last name'
                />
                <Form.Select
                    fluid
                    label='Tipo Usuario'
                    options={options}
                    placeholder='ej.Usuario Restaurante'
                />                
                </Form.Group>
                <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Opinion'
                placeholder='Opinion'
                />
                <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Label with htmlFor'
                />
            </Form>
          </Segment>
        )
    }
    
}