import React, {Component} from 'react';
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class FormEvent extends Component{

    state = {
        idRestaurant : '1',
        name : '',
        startDate: new Date(),
        type: '',
        isModalOpen: false,
        showMsm : false,
        showMsmE : false,
        file : null
    }
    
    updateState=(m)=>{
        console.log(m)
        console.log("es esatado que venia",this.state)
        this.setState({
            name : '',
            startDate: new Date(),
            type: '',
            isModalOpen: false
        })
        this.forceUpdate()
        console.log("el nuevo estado actualizado",this.state)
        
    }
    openModal=()=> {
        this.setState({isModalOpen : true})
    }

    closeModal=()=> {
        this.setState({isModalOpen : false})
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
        this.setState({file: e.target.files[0]})
    }

    _handleSubmit=(e)=>{
        var idRestaurant1 = this.state.idRestaurant
        var name1 = this.state.name
        var date1 = this.state.startDate
        var type1 = this.state.type
        var file = this.state.file
        
        var params ={
            idRestaurant: idRestaurant1,
            name: name1,
            date: date1,
            type: type1,
            archivo : file        
        };

        var data = new FormData()
        for(var key in params){
            data.append(key,params[key])
        }
        var request ={
            method: 'POST',
            body : data
        }
        fetch('http://181.50.100.167:4000/addEvent',request)
        .then(response =>  {
            console.log(response.status)
            if (response.status == "200") {
                console.log("se escribió con exito")
                this.updateState("me fuí a actualizar");
                this.setState({showMsm: true})
                setTimeout(function(){
                },2000)
                window.location.reload()
            }else{
                this.setState({showMsmE: true})
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
                        <input name="archivo" type="file" onChange={this.handleFileSelect} />
                    </Form.Field>
                    <Button className='ui inverted secondary button' type='submit'>Guardar</Button>{
                       ( this.state.showMsm && 
                        <Message positive>
                        <Message.Header>Guardado Exitoso</Message.Header>
                        <p>
                          ¡ Tu evento se ha guardado de forma exitosa !
                        </p>
                       </Message>) ||
                        (this.state.showMsmE &&
                        <Message negative>
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