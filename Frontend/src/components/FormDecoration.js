import React, {Component} from 'react';
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import ModalConfirm from './ModalConfirm';

export class FormDecoration extends Component{

    state = {
        idRestaurant : '1',
        description : '',
        type:'',
        value: '',
        image : null,
        showMsm : false,
        showMsmE : false
    }

    handleChangeDescription=(e)=>{
        this.setState({description:e.target.value})
    }
    handleChangeType=(e)=>{
        this.setState({type:e.target.value})
    }
    handleChangeValue=(e)=>{
        this.setState({value:e.target.value})
    }
    handleFileSelect=(e)=>{
        this.setState({image : e.target.files[0]})
    }
     

    _handleSubmit=(e)=>{
        console.log(this.state)
        var idRestaurantD = this.state.idRestaurant
        var  descriptionD = this.state.description
        var  typeD = this.state.type
        var  valorD=this.state.value
        var  file = this.state.image
        var params ={
            idRestaurant: idRestaurantD,
            description: descriptionD,
            type: typeD ,
            price : valorD , 
            urlImg : file  
        };

        var data = new FormData()
        for(var key in params){
            data.append(key,params[key])
        }

        var request ={
            method: 'POST',
            body : data
        }

        fetch('http://181.50.100.167:4000/addDecoration',request)
        .then(response => {console.log(response)
            if (response.status == "200") {
                console.log("se escribió con exito")
                this.setState({showMsm: true})
                setTimeout(function(){
                },3000)
                window.location.reload(); 
            }else{
                this.setState({showMsmE: true})
            }
        })
        .catch(err => {
            console.log(err)});
          
    }

    
    render(){
        return(
            <Segment>
            <div >
                <Form onSubmit={this._handleSubmit}>
                    <Form.Field>
                        <label>Tipo</label>
                        <input placeholder='Tipo de decoración ej. Cumpleaños' onChange={this.handleChangeType} />
                    </Form.Field>
                    <Form.Field>
                        <label>Valor</label>
                        <input placeholder='Valor de la decoración ej. 10.000' onChange={this.handleChangeValue} />
                    </Form.Field>
                    <Form.Field>
                        <label>Descripción</label>
                        <input placeholder='Describa la Decoración' onChange={this.handleChangeDescription} />
                    </Form.Field>
                    <Form.Field>
                        <label>Sube una imagen</label>
                        <input type="file" onChange={this.handleFileSelect} />
                    </Form.Field>
                    <Button className='ui inverted secondary button' type='submit'>Guardar</Button>{
                        this.state.showMsm &&
                        (<Message positive>
                        <Message.Header>Guardado Exitoso</Message.Header>
                        <p>
                        ¡ Tu evento se ha guardado de forma exitosa !
                        </p>
                        </Message> ) ||
                        this.state.showMsmE &&
                        (<Message negative>
                            <Message.Header> Un Error ha Ocurrido :c</Message.Header>
                            <p>
                                Por favor. revisa que los campos estén llenos adecuadamente
                            </p>
                            </Message> )
                    }
                </Form>             
            </div>
            </Segment>
        )
    }
}