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

    state={
        open : false,
        setOpen : false,
        Date : new Date()
    }


  handleClickOpen = () => {
      this.setState({open:true})
  };

  handleClose = () => {
    this.setState({open: false})
  };

  handleChange = (date) => {
    this.setState({Date: date})
    }        
    render(){
  return (
    <div>
       
          
              <Button  className='ui inverted secondary button' onClick={this.handleClickOpen}>
               Modificar 
            </Button>
         
    
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            El nuevo contenido será reemplazado en el evento
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            
            label="Tipo de Evento"
           
            fullWidth
          />

        <TextField
            autoFocus
            margin="dense"
            
            label="Descrición del evento"
           
            fullWidth
          />
          <br></br>
        <DialogContentText>
            Modifica la fecha
          </DialogContentText>
        <DatePicker
            selected={this.state.Date}
            onChange={this.handleChange}/>

        </DialogContent>
        
        <DialogActions>
          <Button onClick={this.handleClose} color='blue'>
            Salir
          </Button>
          <Button onClick={this.handleClose} color='blue'>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
   
    </div>
  );
    }
}

export class FormDecoration extends Component{

  PropTypes ={
    id : PropTypes.string,
    idRestaurant : PropTypes.string,
    description : PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
   
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

   
}