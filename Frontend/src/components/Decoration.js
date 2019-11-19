import React , {Component} from 'react';
import { Button, Card, Image, Segment} from 'semantic-ui-react'
import ImageDefault from '../images/decora.jpg'
import PropTypes from 'prop-types'
import {ButtonAdvD} from '../components/ButtonAdvD'
import "../semantic/semantic.min.css"
import "../styles/menu.css"
import { FormE } from '../components/funt';

export class Decoration extends Component{
    PropTypes ={
        id : PropTypes.string,
        idRestaurant : PropTypes.string,
        description : PropTypes.string,
        type: PropTypes.string,
        image: PropTypes.string,
        valor:PropTypes.string
    }

    render(){
        const idD=this.props.id
        const idRes=this.props.idRestaurant
        const description=this.props.description
        const type=this.props.type
        const img=this.props.img
        const valor= this.props.valor

        return(
            <Segment>
                <Card.Group>    
                    <Card>
                        <Image
                            src= {'http://181.50.100.167:4000/'+ img ||ImageDefault}
                            wrapped ui={false}
                        />
                        <Card.Content>
                            <Card.Header>{type || 'nombre'}</Card.Header>
                            <Card.Meta>{valor || 'fecha'}</Card.Meta>
                            <Card.Description>
                            {description || 'descripción'}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra >
                            <div className='Center'>
                                <div className='ui two buttons' >
                                    <FormE
                                    idD={idD}
                                    typeD={type}
                                    descriptionD={description}
                                    priceD={valor}

                                    ></FormE>
                                    <ButtonAdvD  cancelButton={'cancelar'} 
                                                content={'¿Está Seguro(a) que desea eliminar la Decoración?'} 
                                                confirmButton={'Continuar'}
                                                ide={idD}
                                                className='ui inverted secondary button'  >
                                    </ButtonAdvD>
                                </div>
                            </div>
                        </Card.Content>
                        </Card>   
                </Card.Group>
            </Segment>
        )
    }
}
