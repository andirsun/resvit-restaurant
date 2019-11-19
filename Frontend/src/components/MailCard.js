import React , {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Image, Segment, CardGroup, Icon, Popup} from 'semantic-ui-react'
import {Link} from "react-router-dom";

export class MailCard extends Component{
    render(){
        return(
            <Segment>
                <Card.Group>    
                    <Card fluid color="yellow">
                        <Card.Content header='Este es el encabezado del mensaje'/>
                        <Card.Content>
                        <Card.Description>
                        { 'descripción'}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Popup content = "Eliminar Mail" on ={['hover']} trigger={<Icon name='delete' size={"large"}/>}>
                                </Popup>
                            </a>
                            <a>
                            <Popup content = "Responder Mail" on ={['hover']} trigger={<Icon name='comments' size={"large"}/> }/>
                            </a>
                        </Card.Content>
                    </Card>   
                </Card.Group>
            </Segment>            
        )
    }
}