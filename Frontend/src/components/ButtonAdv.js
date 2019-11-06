import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react';
import "../semantic/semantic.min.css"
import "../styles/menu.css"

export class ButtonAdv extends Component {
    state = { open: false }

    handleDelete(id,e){ 
        console.log(id)
        var url = 'https://resvit.herokuapp.com/deleteEvent/?id='+id
        console.log(url)
        fetch(url,{method:'DELETE'})
        .then("se supone que eliminó")
        window.location.reload();
    }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const id = this.props.ide
      return (
        <div>
          <Button onClick={this.open} className='ui inverted secondary button'>Eliminar</Button>
          <Confirm
            open={this.state.open}
            onCancel={this.close}
            onConfirm={(e)=>this.handleDelete(id,e)}
            cancelButton={this.props.cancelButton}
            content={this.props.content}
            confirmButton={this.props.confirmButton}
          />
        </div>
      )
    }
}