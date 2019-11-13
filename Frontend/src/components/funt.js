import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'


export class  FormE extends Component {
  
  state={
    open : false,
    type : '',
    description : '',
    price : ''
  }
  componentDidMount(){
    const {idD, typeD, descriptionD, priceD }=this.props
    this.setState({
      type : typeD,
      description : descriptionD,
      price : priceD
    })
  }

  handleClickOpen = () => {
    this.setState({open:true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  handleType =(e) =>{
    this.setState({type:e.target.value})
  }

  handlePrice =(e)=> {
    this.setState({price : e.target.value})
  }

  handleDescription=(e)=>{
    this.setState({description : e.target.value})
  }

  _handleSubmit=()=>{
    
    var id=this.props.idD
    var typeD = this.state.type
    var descriptionD = this.state.description
    var priceD = this.state.price
    var params ={
        description: descriptionD,
        type: typeD,
        price : priceD        
  
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
                defaultValue ={this.state.type}
                onChange={this.handleType}
              />

              <TextField
                autoFocus
                margin="dense"
                label="Descrición de Decoración"
                fullWidth
                defaultValue ={this.state.description}
                onChange={this.handleDescription}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Valor"
                fullWidth
                defaultValue ={this.state.price}
                onChange={this.handlePrice}
              />
            </DialogContent>

             <DialogActions>
              <Button className='ui inverted secondary button'  onClick={this.handleClose} >
                Salir
              </Button>
              <Button className='ui inverted secondary button'  onClick={this._handleSubmit} >
                Guardar
              </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
  }
}

