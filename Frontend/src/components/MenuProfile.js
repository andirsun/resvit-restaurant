import React , {Component} from 'react';
import {Menu } from 'semantic-ui-react'

export class MenuProfile extends Component {
    state = { activeItem: 'Eventos' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <Menu inverted pointing secondary>
            <Menu.Item
              name='Agregar'
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