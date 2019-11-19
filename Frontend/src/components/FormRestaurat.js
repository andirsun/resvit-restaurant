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
                    placeholder='Asigne un nombre de Usuario, será modificable'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Contraseña'
                    placeholder='Asigne una contraseña, será provisional'
                />
                <Form.Select
                    fluid
                    label='Tipo Usuario'
                    options={options}
                    placeholder='ej.Usuario Restaurante'
                />                
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