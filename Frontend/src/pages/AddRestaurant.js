import React, {Component} from 'react';
import {FormRestaurant} from '../components/FormRestaurat'
import {Title} from '../components/Title'
import {Link} from 'react-router-dom'
import { Button} from 'semantic-ui-react'


export class AddRestaurant extends Component{
    render(){
        return(
            <div>
                <div className="ui bottom attached button">
                    <Title>Añadir Usuario Restaurante</Title>
                    <div>
                        <Link to ='/AddDecoration' >
                            <Button className='ui inverted secondary button' >
                            <i className="angle double left icon"></i>
                                Volver        
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <FormRestaurant>
                    </FormRestaurant>
                </div>
            </div>
        )
    }
}