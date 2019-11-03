import React , {Component} from 'react';
import { Button, Card, Image, Segment} from 'semantic-ui-react'
import ImageDefault from '../images/banda.jpg'
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

    state={
        result : []
    }


    handleDelete(id,e){ 
        console.log(id)
        var url = 'https://resvit.herokuapp.com/deleteEvent/?id='+id
        console.log(url)
        fetch(url,{method:'DELETE'})
        .then("se supone que eliminó")
    }

    render(){
        const { id,name, description, date, image}= this.props
        return(
            <Segment>
                <Card.Group>    
                    <Card>
                        <Image
                            src= {image ||ImageDefault}
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
                                    <Button className='ui inverted secondary button' onClick={(e)=>this.handleDelete(id,e)}>
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
