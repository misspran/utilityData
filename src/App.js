import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ChartUtilitiesBill from './ChartUtilitiesBill'
import UtilitiesTable from './UtilitiesTable'
import SavingsChart from './SavingsChart'
import { Grid, Column, Segment, Header } from 'semantic-ui-react'

const data = require('./utilData.json')

class App extends Component {
  render() {
    console.log(data)
    const billByMonth = []
    const withOutSavings = []
    data.forEach( (dat) => {
      billByMonth.unshift({y: dat.bill, x: dat.month + '/'+ dat.year })
      withOutSavings.unshift({y: dat.bill + dat.savings, x: dat.month + '/'+ dat.year })
    });
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='dashboard'>
        <div id="maincontent" className="ui main container">
        <Grid stackable >
        <div id="myChart">
        <Segment color='orange'>
        <Header size='medium'>Electricity Billing Statement</Header>
        <UtilitiesTable />
        </Segment>
        </div>
        <Grid.Row columns={2} padded='vertically'>
        <Grid.Column floated="left">
        <Segment color='orange'>
        <Header size='medium'>Monthly Electricity Cost With and Without Solstice</Header>
        <ChartUtilitiesBill />
        </Segment>
        </Grid.Column>
        <Grid.Column floated="right">
        <Segment color='orange'>
        <Header size='medium'>Monthly Savings Over Time</Header>
        <SavingsChart />
        </Segment>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
