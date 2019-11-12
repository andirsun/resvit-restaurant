import React , {Component} from 'react';
import { Button, Card, Image, Segment} from 'semantic-ui-react'
import ImageDefault from '../images/decora.jpg'
import PropTypes from 'prop-types'
import "../semantic/semantic.min.css"
import "../styles/menu.css"

export class Decoration extends Component{
    PropTypes ={
        id : PropTypes.string,
        idRestaurant : PropTypes.string,
        description : PropTypes.string,
        type: PropTypes.string,
        image: PropTypes.string,
        valor:PropTypes.string
    }

    handleDelete(id,e){ 
        console.log(id)
        var url = 'https://resvit.herokuapp.com/deleteDecoration/?id='+id
        console.log(url)
        fetch(url,{method:'DELETE'})
        .then("se supone que eliminó")

    }

    render(){
        const idD=this.props.id
        const idRes=this.props.idRestaurant
        const description=this.props.description
        const type=this.props.type
        const img=this.props.image
        const valor= this.props.valor

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
                                    <Button className='ui inverted secondary button'>
                                        Editar
                                    </Button>
                                    <Button className='ui inverted secondary button' onClick={(e)=>this.handleDelete(idD,e)}>
                                        Eliminar
                                    </Button>
                                </div>
                            </div>
                        </Card.Content>
                        </Card>   
                </Card.Group>
            </Segment>
        )
    }
}
