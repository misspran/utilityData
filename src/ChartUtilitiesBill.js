import React, { Component } from 'react';
import './App.css';
import {VictoryChart, VictoryArea, VictoryGroup, VictoryAxis} from 'victory';

const data = require('./utilData.json')

class ChartUtilitiesBill extends Component {
  render() {
    const billByMonth = []
    const withOutSavings = []
    data.forEach( (dat) => {
      billByMonth.unshift({y: dat.bill, x: dat.month + '/'+ dat.year })
      withOutSavings.unshift({y: dat.bill + dat.savings, x: dat.month + '/'+ dat.year })
    });
    
    return (
      
        <VictoryChart animate={{ duration: 1000 }}>
        <VictoryGroup
          style={{
            data: { strokeWidth: 1, fillOpacity: .8 }
          }}
        >
          <VictoryArea
            style={{
              data: { fill: "grey", stroke: "grey" }
            }}
            data={withOutSavings}
          />
          <VictoryArea
            style={{
              data: { fill: "orange", stroke: "orange" }
            }}
            data={billByMonth}
          />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default ChartUtilitiesBill;