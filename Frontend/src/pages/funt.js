import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'


export function FormE() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       
          
              <Button  className='ui inverted secondary button' onClick={handleClickOpen}>
              Editar
            </Button>
         
    
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar Decoración</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor edite los campos de la Decoracion.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            
            label="Tipo de Decoración"
           
            fullWidth
          />

<TextField
            autoFocus
            margin="dense"
            
            label="Descrición de Decoración"
           
            fullWidth
          />
        </DialogContent>

      

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Salir
          </Button>
          <Button onClick={handleClose} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
   
    </div>
  );
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