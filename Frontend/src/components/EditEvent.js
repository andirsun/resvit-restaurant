import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Label} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";


export class FormE extends Component {

    PropTypes ={
        idE : PropTypes.string,
        nameE : PropTypes.string,
        type : PropTypes.string,
        date : PropTypes.string
    }

    state={
        open : false,
        setOpen : false,
        Date : new Date(),
        name : '',
        type : '',

    }

    componentDidMount(){
        const {idE, nameE, typeE, dateE}=this.props
        this.setState({
            name: nameE,
            type : typeE,
            Date : new Date(dateE)
        })
    }

    handleClickOpen = () => {
        this.setState({open:true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handleChange = (date) => {
        console.log("esta es la fecha a la que cambió",date)
        this.setState({Date: date})
    }
    handleName =(e)=>{
        this.setState({name : e.target.value})
    }
    handleType=(e)=>{
        this.setState({type: e.target.value})
    }
    
    _handleSubmit=()=>{
        console.log(this.state)
        var id=this.props.idE
        var nameE = this.state.name
        var typeE = this.state.type
        var dateE = this.state.Date
        console.log( "LA DATE QUE SE VA",dateE)
        var params ={
            name: nameE,
            date: dateE,
            type: typeE        
      
      };
        var request ={
            method: 'PUT',
            headers:{
                'Accept' : 'application/json',
                "Content-type": "application/json"
            },
            body : JSON.stringify(params)
        }
        fetch('http://181.50.100.167:4000/editDecoration?id='+id,request)
        .then(response =>  {
            console.log(response.status)
            if (response.status == "200") {
                console.log("se editó con exito")
                this.setState({open:false})
                window.location.reload()
            };
        })
        .catch(err => console.log("Se presentó un error"));
          
    }
    render(){
    return (
        <div>
            <Button  className='ui inverted secondary button' onClick={this.handleClickOpen}>
                Modificar 
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Evento</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        El nuevo contenido será reemplazado en el evento
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Tipo de Evento"
                        fullWidth
                        defaultValue ={this.state.name}
                        onChange={this.handleName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Descrición del evento"
                        fullWidth
                        defaultValue ={this.state.type}
                        onChange={this.handleType}
                    />
                    <br></br>
                    <DialogContentText>
                        Modifica la fecha
                    </DialogContentText>

                    <DatePicker
                        selected={this.state.Date}
                        onChange={this.handleChange}
                    />

                </DialogContent>

                <DialogActions>
                    <Button className='ui inverted secondary button' onClick={this.handleClose} color='blue'>
                        Salir
                    </Button>
                    <Button className='ui inverted secondary button' onClick={this._handleSubmit} color='blue'>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
    
        </div>
    )}
}
