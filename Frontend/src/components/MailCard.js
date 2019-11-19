import React , {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Image, Segment, CardGroup, Icon, Popup} from 'semantic-ui-react'
import {Link} from "react-router-dom";

export class MailCard extends Component{
    render(){
        const id = this.props.idRes
        const descripciOn = this.props.contenido
        return(
            <Segment>
                <Card.Group>    
                    <Card fluid color="yellow">
                        <Card.Content header={"Mensaje de la Reserva : " + id}/>
                        <Card.Content>
                        <Card.Description>
                        {descripciOn}
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