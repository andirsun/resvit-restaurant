import React , {Component} from 'react';
import {Menu } from 'semantic-ui-react'

export class MenuR extends Component {
    state = { activeItem: 'Eventos' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <Menu inverted pointing secondary>
            <Menu.Item
              name='Información'
              active={activeItem === 'Información'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Reservas'
              active={activeItem === 'Reservas'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Buzón'
              active={activeItem === 'Buzón'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Galería'
              active={activeItem === 'Galería'}
              onClick={this.handleItemClick}
            />
             <Menu.Item
              name='Eventos'
              active={activeItem === 'Eventos'}
              onClick={this.handleItemClick}
            />
             <Menu.Item
              name='Decoración'
              active={activeItem === 'Decoración'}
              onClick={this.handleItemClick}
            />
             <Menu.Item
              name='Comentarios'
              active={activeItem === 'Comentarios'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Mesas'
              active={activeItem === 'Mesas'}
              onClick={this.handleItemClick}
            />
          </Menu>
      )
    }
  }