import React , {Component} from 'react';
import {Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";

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
              as={Link} name='Google' to='/google'
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
              as={Link} name='Events' to='/Events'
              active={activeItem === 'Eventos'}
              onClick={this.handleItemClick}
              
            />
             <Menu.Item 
             as={Link} name='Decorations' to='/Decorations'
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