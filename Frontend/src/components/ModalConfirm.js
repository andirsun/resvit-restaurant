import React, {Component}  from  'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class  ModalConfirm  extends Component{
  state= {
    open : false
  }

  CloseModal(){
    //this.setState({open: true})
  }

  render(){
    var textBut = this.props.text
    var textCont=this.props.textC
    var text = this.props.description
    //trigger={<Button className='ui inverted secondary button'
    //>{textBut}</Button>} 
  return(
  <Modal 
    open={this.state.open}
    closeIcon>
    <Header icon='archive' content={textCont} />
    <Modal.Content>
      <p>
        {text}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={this.CloseModal()}>
        <Icon name='remove' /> Cancelar
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Continuar
      </Button>
    </Modal.Actions>
  </Modal>
)}
}
