import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Decoration} from '../components/Decoration.js'

export class DecorationsList extends Component {
    PropTypes ={
        decorations : PropTypes.array
    }
    render(){
        const {decorations}
         = this.props
        return(
            <div className="ui three doubling stackables cards">
                {
                    decorations.map(event =>{
                        return (
                            <div key={event._id} >
                                <Decoration
                                id ={event._id}
                                idRestaurant={event.idRestaurant}
                                type ={event.type}
                                description={event.description}
                                valor ={event.price}
                                img ={event.urlImg}
                                />
                            </div>
                        )
                    })
                } 
            </div>
        )
    }
}