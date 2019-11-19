import React , {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Image, Segment, CardGroup} from 'semantic-ui-react'
import {Link} from "react-router-dom";

export class MailCard extends Component{
    render(){
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