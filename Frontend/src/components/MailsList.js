import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {MailCard} from './MailCard'

export class MailsList extends Component {
    PropTypes ={
        mail : PropTypes.array
    }
    render(){
        const mail = this.props.contenido
        //const user=this.props.user
        console.log("aqui ya va a listar esto",mail)
        return(
            <div>
                {
                    mail.map(event =>{
                        return (
                            <div key={event.PK_idReservation} >
                                <MailCard
                                idRes={event.PK_idReservation}
                                contenido={event.comments}
                                />
                            </div>
                        )
                    })
                } 
            </div>
        )
    }
}