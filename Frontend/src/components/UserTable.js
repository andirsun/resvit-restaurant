import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

const TableExampleApprove = () => (
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Usuario</Table.HeaderCell>
        <Table.HeaderCell>Correo Electrónico</Table.HeaderCell>
        <Table.HeaderCell>Tipo Usuario</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>Comensal</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Restaurante</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Administrador</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Añadir Usuario
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExampleApprove