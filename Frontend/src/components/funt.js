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
               Modificar 
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
          <Button onClick={handleClose} color='blue'>
            Salir
          </Button>
          <Button onClick={handleClose} color='blue'>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
   
    </div>
  );
}

