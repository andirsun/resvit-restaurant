import React , {Component} from 'react';
import {Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import logo from '../images/RevitBlanco.png'
import '../styles/menu.css'

export class MenuR extends Component {
    state = { activeItem: 'Eventos', id : '' , error : false, idAdmin: ''}

    componentDidMount(){
      try{
        const url = window.location.href
        let urlSplit = url.split('?')
        let idRestaurant = urlSplit[1].split('=')[1]
        let idUs= urlSplit[2].split('=')[1]
        console.log("este es el id restaurante",idRestaurant)
        console.log("este es el id usuario",idUs)
        this.setState({id : idRestaurant})
        this.setState({idAdmin : idUs})
      }
      catch(err){
        this.setState({error : true})
        console.log("no hubo split")
      }
    }
    
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
  
    render() {
      if(this.state.error ==  true){
        return(
          <div> 
            sxdcftvygbhnjmk,liugyf
            <div className="Error-Page">
            <img src= {logo}></img>
            </div>
            <h1 className =" Error-Link">
              <a  href={"http://181.50.100.167:9000/login/"} className="link" >Intentalo de Nuevo</a>
            </h1>
          </div>
          )        
      }else{

      
      const { activeItem } = this.state
      console.log("este es el id", this.state.id)
      const urlInfo='http://181.50.100.167:3000/?id='+this.state.id +'?id=' + this.state.idAdmin
      const urlReservas='http://181.50.100.167:3000/Reservas/?id='+this.state.id +'?id=' + this.state.idAdmin
      const urlGaleria='http://181.50.100.167:3000/Galeria/?id='+this.state.id +'?id=' + this.state.idAdmin
      const urlComentarios='http://181.50.100.167:3000/Comentarios/?id='+this.state.id +'?id=' + this.state.idAdmin
      const urlMesas='http://181.50.100.167:3000/Mesas/?id='+this.state.id +'?id=' + this.state.idAdmin
      return (
          <Menu inverted pointing secondary>
            <Menu.Item
              href={urlInfo}
              target='_self'
              name='Información'
              active={activeItem === 'Información'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href={urlReservas}
              target='_self'
              name='Reservas'
              active={activeItem === 'Reservas'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Buzón'
              as={Link} to={'/Buzon/?id='+ this.state.id +'?id=' + this.state.idAdmin}
              active={activeItem === 'Buzón'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href={urlGaleria}
              target='_self'
              name='Galería'
              active={activeItem === 'Galería'}
              onClick={this.handleItemClick}
            />
             <Menu.Item 
              name='Eventos'
              as={Link} to={'/Events/?id='+ this.state.id +'?id=' + this.state.idAdmin}
              active={activeItem === 'Eventos'}
              onClick={this.handleItemClick}
              
            />
             <Menu.Item 
             as={Link} name='Decorations' to={'/Decorations'+'/?id='+this.state.id +'?id=' + this.state.idAdmin}
              name='Decoración'
              active={activeItem === 'Decoración'}
              onClick={this.handleItemClick}
            />
             <Menu.Item
              href={urlComentarios}
              target='_self'
              name='Comentarios'
              active={activeItem === 'Comentarios'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href={urlMesas}
              target='_self'
              name='Mesas'
              active={activeItem === 'Mesas'}
              onClick={this.handleItemClick}
            />
          </Menu>
          
      )
    }}
  }