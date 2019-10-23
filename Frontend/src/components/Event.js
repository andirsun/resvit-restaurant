import React , {Component} from 'react';
import { Button, Card, Image, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import "../semantic/semantic.min.css"
import "../styles/menu.css"

export class Event extends Component{
    PropTypes ={
        id : PropTypes.string,
        name : PropTypes.string,
        description : PropTypes.string,
        date: PropTypes.string,
        image: PropTypes.string
    }

    render(){
        const { name, description, date, image}= this.props
        return(
            <Segment>
                <Card.Group>    
                    <Card >
                        <Image
                            src= {image ||'https://react.semantic-ui.com/images/avatar/large/steve.jpg'}
                            wrapped ui={false}
                        />
                        <Card.Content>
                            <Card.Header>{name || 'nombre'}</Card.Header>
                            <Card.Meta>{date || 'fecha'}</Card.Meta>
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
                                    <Button className='ui inverted secondary button'>
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
