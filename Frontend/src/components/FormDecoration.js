import React, {Component} from 'react';
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import ModalConfirm from './ModalConfirm';

export class FormDecoration extends Component{

    state = {
        idRestaurant : '1',
        description : '',
        type:'',
        value: '',
        name:'',
        image : null,
        showMsm : false,
        showMsmE : false
    }

    handleChangeName=(e)=>{
        this.setState({name:e.target.value})
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
        this.setState({file:e.target.files[0]})
    }
     

    _handleSubmit=(e)=>{
        console.log(this.state)
        var idRestaurant = this.state.idRestaurant
        var  description = this.state.description
        var  type = this.state.type
        var  valor=this.state.value
        var params ={
            idRestaurant: idRestaurant,
            description: description,
            type: type ,
            value : valor      
        };

        var request ={
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
				"Content-type": "application/json"
            },
            body : JSON.stringify(params)
        }

        fetch('https://resvit.herokuapp.com/addDecoration',request)
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
                        <label>Nombre</label>
                        <input placeholder='Nombre para la decoración' onChange={this.handleChangeName}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Tipo</label>
                        <input placeholder='Tipo de decoración' onChange={this.handleChangeType} />
                    </Form.Field>
                    <Form.Field>
                        <label>Valor</label>
                        <input placeholder='Valor de la decoración' onChange={this.handleChangeValue} />
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