import React , {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Image, Segment, CardGroup} from 'semantic-ui-react'

export class Restaurant extends Component{

    PropTypes ={
        idR : PropTypes.string,
        nameR : PropTypes.string,
        descriptionR : PropTypes.string,
        addressR: PropTypes.string,
        cellR: PropTypes.string,
        emailR: PropTypes.string,
        scheduleR : PropTypes.string
    }

    render(){
        //const { id,name, description, address, cell, email, schedule}= this.props
        const address=this.props.addressR
        const name = this.props.nameR;
        const description = this.props.descriptionR;
        console.log("este es el nombre de l restaurante ",name)
        return(
            <Segment>
                <Card.Group>    
                    <Card fluid color="yellow">
                        <Card.Content>
                            <Card.Header>{name || 'nombre'}</Card.Header>
                            <Card.Meta>{ address||'fecha'}</Card.Meta>
                            <Card.Description>
                            {description || 'descripción'}
                            </Card.Description>
                        </Card.Content>
                    </Card>   
                </Card.Group>
            </Segment>
        )
    }
}
