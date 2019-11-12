import React, {Component}  from  'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class  ModalConfirm  extends Component{

  render(){
    var text = this.props.description
    var textButton = this.props.textButton
  return(
  <Modal trigger={<Button>{textButton}</Button>} closeIcon>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        {text}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)}
}
