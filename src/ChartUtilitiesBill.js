import React, { Component } from 'react';
import {VictoryChart, VictoryBar, VictoryGroup, VictoryAxis, VictoryLabel, VictoryLegend} from 'victory';

const data = require('./utilData.json')

class ChartUtilitiesBill extends Component {
  render() {
    let billByMonth = []
    let withOutSavings = []
    data.forEach( (dat) => {
      billByMonth.unshift({y: dat.bill, x: dat.month + '/'+ dat.year })
      withOutSavings.unshift({y: dat.bill + dat.savings, x: dat.month + '/'+ dat.year })
    });
    
    return (
      
      <VictoryChart 
        title="Utility Bill Monthly Comparison"
        padding={{ top: 20, bottom: 50, left:50, right:-60 }}
        animate={{ duration: 2000 }}
        scale={{x:"linear", y:"linear"}}
        offsetX={-25}
      >
        
      <VictoryLegend x={150} y={20}
        width={40} height={25}
        orientation="horizontal"
        gutter={20}
        style={{ data: { fontSize: 10 } }}
        data={[
          { name: "Bill", symbol: { fill: "grey", type: "star" } },
          { name: "Bill w/ Solstice", symbol: { fill: "orange", type: "star" } }
        ]}
      />
        <VictoryGroup 
        crossAxis={false}
              offset={20}
              domain={{x: [0, 6]}}
              style={{ data: { width: 15, fillOpacity: .8, strokeWidth: 1  } }}
              colorScale={["grey", "orange"]}
            >
          <VictoryBar
            style={{
              data: { fill: "grey", stroke: "grey" }
            }}
            data={withOutSavings}
          />
          <VictoryBar
            style={{
              data: { fill: "orange", stroke: "orange" }
            }}
            data={billByMonth} 
          />
          <VictoryAxis dependentAxis 
          tickFormat={(tick) => `$${tick}`}
          />
          <VictoryAxis
          crossAxis={false}
          domain={{x: [0, 5], y: [0, 175]}}
                tickFormat={billByMonth.map(bill => bill.x) }
                tickLabelComponent={<VictoryLabel textAnchor="start" dx={50} />} 
          />
        </VictoryGroup>
      </VictoryChart>
      
    );
  }
}

export default ChartUtilitiesBill;