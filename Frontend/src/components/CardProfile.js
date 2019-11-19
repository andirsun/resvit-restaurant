import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import img from '../images/admin.png'

const CardExampleCard = () => (
  <Card>
    <Image src={img} size={"small"} centered={true}/>
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='cogs' />
        Administrador 
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard