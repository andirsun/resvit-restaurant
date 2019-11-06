import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

export class FormDecoration extends Component{

   
    state = {
        idRestaurant : '1',
        description : '',
        type: '',
        isModalOpen: false
    }
     
    openModal=()=> {
        console.log("venia el estado", this.state.isModalOpen)
        this.setState({isModalOpen : true})
        console.log("cambio el estado", this.state.isModalOpen)
    }

    closeModal=()=> {
        console.log("venia el estado", this.state.isModalOpen)
        this.setState({isModalOpen : false})
        console.log("cambio el estado", this.state.isModalOpen)
    }
    handleChange = (date) => {
        this.setState({
          startDate: date
        });
    }
    

    
    handleChangeDescription = (e) => {
        e.preventDefault()
        this.setState({
          description: e.target.value
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
        var description1 = this.state.description
        var type1 = this.state.type
        var params ={
            idRestaurant: idRestaurant1,
            description: description1,
            type: type1        
        };
        var request ={
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
				"Content-type": "application/json"
            },
            body : JSON.stringify(params)
        }
        fetch('https://resvit.herokuapp.com/AddDecoration',request)
        .then(response =>  {
            console.log(response.status)
            if (response.status == "200") {
                console.log("se escribió con exito")
            };
        })
        .catch(err => console.log("Se presentó un error"));
          
    }
    
    render(){
        return(
            <Segment>
            <div >
                <Form onSubmit={this._handleSubmit}>
                    <Form.Field>
                        <label>descripcion</label>
                        <input placeholder='Nombre para la descripcion' onChange={this.handleChangeDescription}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Tipo</label>
                        <input placeholder='Tipo de decoración' onChange={this.handleChangeType} />
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