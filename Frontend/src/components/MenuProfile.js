import React , {Component} from 'react';
import {Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";

export class MenuProfile extends Component {
    state = { activeItem: 'Eventos' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <Menu inverted pointing secondary>
            <Menu.Item
              name='Agregar'
              as={Link} to='/AddRestaurant'
              active={activeItem === 'Agregar'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Editar'
              active={activeItem === 'Editar'}
              onClick={this.handleItemClick}
            />
          </Menu>
      )
    }
  }