import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Restaurant} from './Restaurant'

export class RestaurantsList extends Component {
    PropTypes ={
        restaurants : PropTypes.array
    }
    render(){
        const {restaurants} = this.props
        const user=this.props.user
        console.log("aqui ya va a listar esto",restaurants)
        return(
            <div className="divRestaurant">
                {
                    restaurants.map(event =>{
                        return (
                            <div key={event._id} >
                                <Restaurant
                                idR={event._id}
                                nameR ={event.name}
                                descriptionR={event.description}
                                addressR={event.address}
                                cellR={event.telephone}
                                emailR={event.email}
                                scheduleR={event.schedule}
                                User={user}
                                />
                            </div>
                        )
                    })
                } 
            </div>
        )
    }
}