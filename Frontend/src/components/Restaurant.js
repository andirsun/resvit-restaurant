import React , {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Image, Segment, CardGroup} from 'semantic-ui-react'
import {Link} from "react-router-dom";

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
        const idRestaurant = this.props.idR;
        console.log("el id restaurante",idRestaurant)
        console.log("este es el nombre de l restaurante ",name) 
        var url='http://181.50.100.167:3010/?id='+idRestaurant
        console.log("esta es la url",url)
        return(
            <Segment>
                <Card.Group>    
                    <Card fluid color="yellow" href={url}>
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
