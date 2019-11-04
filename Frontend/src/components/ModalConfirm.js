import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

export class ModalConfirm extends Component {

  render() {
    return (
      <div>
        <Modal>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.props.onClose}>No</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
