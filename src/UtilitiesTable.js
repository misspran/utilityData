import React from 'react'
import { Table } from 'semantic-ui-react';
const data = require('./utilData.json');

let totalKWH = data.reduce((total, dat) => {return total += dat.kwh}, 0)
let totalBill = Math.round(data.reduce((total, dat) => {return total += dat.bill}, 0)*100)/100
let totalSavings = Math.round((data.reduce((total, dat) => {return total += dat.savings}, 0))*100)/100
const UtilitiesTable = () => (
  <Table celled  key={'orange'} className="table">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>KWH</Table.HeaderCell>
        <Table.HeaderCell>Bill</Table.HeaderCell>
        <Table.HeaderCell>Savings</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {data.map(dat=>
        <Table.Row key={ dat.month +'/' +dat.year}>
        <Table.Cell>{dat.month +'/' +dat.year} </Table.Cell>
        <Table.Cell>{dat.kwh+'kwh'}</Table.Cell>
        <Table.Cell>{`$${dat.bill}`}</Table.Cell>
        <Table.Cell>{`$${dat.savings}`}</Table.Cell>
      </Table.Row>
    )}
    </Table.Body>
    <Table.Footer id="footer">
      <Table.Row>
        <Table.HeaderCell>{`${data.length} Months`}</Table.HeaderCell>
        <Table.HeaderCell>{`${totalKWH}kwh`}</Table.HeaderCell>
        <Table.HeaderCell>{`$${totalBill}`}</Table.HeaderCell>
        <Table.HeaderCell>{`$${totalSavings}`}</Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default UtilitiesTable;
