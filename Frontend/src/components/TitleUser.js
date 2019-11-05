import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'
export class TitleUser extends Component{
    render(){
        const user = this.props
        return(
            <div>
            <Header size='huge'>{user}</Header>
            </div>
        )
    }
}