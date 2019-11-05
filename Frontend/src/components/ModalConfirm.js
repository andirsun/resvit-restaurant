import React, { Component } from 'react'
import { Button, Modal} from 'semantic-ui-react'

export class ModalConfirm extends Component {

  render() {
    return (
      <div>
        <p>Este es el modal</p>
        <Button onClick={this.props.onClose}>confirmar</Button>

      </div>
    )
  }
}
