import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

export class FormDecoration extends Component{

    state = {
        idRestaurant : '1',
        description : '',
        type:'',
        value: '',
        name:''
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
                    <Button className='ui inverted secondary button' type='submit'>Guardar</Button>
                </Form>              
            </div>
            </Segment>
        )
    }
}