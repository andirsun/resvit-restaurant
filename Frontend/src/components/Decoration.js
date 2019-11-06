import React , {Component} from 'react';
import { Button, Card, Image, Segment,Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ImageDefault from '../images/decora.jpg'
import PropTypes from 'prop-types'
import "../semantic/semantic.min.css"
import "../styles/menu.css"
import { FormE } from '../pages/funt';

export class Decoration extends Component{
    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
    close = () => this.setState({ open: false })
    PropTypes ={
        id : PropTypes.string,
        idRestaurant : PropTypes.string,
        description : PropTypes.string,
        type: PropTypes.string,
        image: PropTypes.string,
       
    }

    

    handleDelete(id,e){ 
        console.log(id)
        var url = 'https://resvit.herokuapp.com/deleteDecoration/?id='+id
        console.log(url)
        fetch(url,{method:'DELETE'})
        .then("se supone que eliminó")
        window.location.reload(false);
    }
    
    render(){
        const idD=this.props.id
        const idRes=this.props.idRestaurant
        const description=this.props.description
        const type=this.props.type
        const img=this.props.image
        const valor= this.props.valor
        const { open, closeOnEscape, closeOnDimmerClick } = this.state
      
        return(
            <Segment>
                <Card.Group>    
                    <Card>
                        <Image
                            src= {img ||ImageDefault}
                            wrapped ui={false}
                        />
                        <Card.Content>
                            <Card.Header>{type || 'nombre'}</Card.Header>
                            <Card.Meta>{idRes || 'fecha'}</Card.Meta>
                            <Card.Description>
                            {description || 'descripción'}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra >
                        <div className='Center'>
                                <div className='ui two buttons' >

                        
                            
                                  
                                    <Button  className='ui inverted secondary button'  onClick={this.closeConfigShow(true, false)} >
                                        Eliminar
                                    </Button>

                                    <FormE  />
                              
                           
                            </div>
                            </div>
                                    <Modal
                                        open={open}
                                        closeOnDimmerClick={closeOnDimmerClick}
                                        onClose={this.close}
                                        >
                                        <Modal.Header>Eliminar Decoracion</Modal.Header>
                                        <Modal.Content>
                                            <p>Esta seguro de eliminar una decoracion</p>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button onClick={this.close} negative>
                                            No
                                            
                                            </Button>

                                          
                                          
                                            <Button     onClick={(e)=>this.handleDelete(idD,e)}  positive>
                                               
                                              SI
                                            </Button>
                                          
                                           
                                            
                                            
                                        </Modal.Actions>
                                    </Modal>

                                  
                                      
                                       
                                  
                               
                    
                        </Card.Content>
                        </Card>   
                </Card.Group>
            </Segment>
        )
    }
}
//onClick={(e)=>this.handleDelete(idD,e)}