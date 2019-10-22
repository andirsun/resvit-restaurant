import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Event} from './Event'

export class EventList extends Component {
    PropTypes ={
        events : PropTypes.array
    }

    render(){
        const {events} = this.props
        return(
            <div>
                {
                    events.map(event =>{
                        return (
                            <div key={event._id} >
                                <Event
                                id ={event._id}
                                name ={event.name}
                                description={event.type}
                                date={event.date}
                                image={event.Poster}
                                />
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}