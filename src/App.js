import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ChartUtilitiesBill from './ChartUtilitiesBill'
import UtilitiesTable from './UtilitiesTable'

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
        <UtilitiesTable />
        <div id="myChart">
        <ChartUtilitiesBill />
        </div>
        
        </div>
        </div>
     
      </div>
    );
  }
}

export default App;
