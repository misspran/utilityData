import React, { Component } from 'react';
import {VictoryChart, VictoryLine, VictoryAxis, VictoryLabel} from 'victory';

const data = require('./utilData.json')

class SavingsChart extends Component {
    render() {
        const savings = []
        let sumOfSavings = 0;
    
        for(var i=data.length-1; i>=0;i--){
            sumOfSavings+= data[i].savings
            savings.push({y: sumOfSavings, x: data[i].month + '/'+ data[i].year })  
        }

        return (
            <VictoryChart  animate={{ duration: 2000 }} >
                <VictoryLine data={savings}
                style={{ data: { stroke: "orange" } }}
                />
                <VictoryAxis dependentAxis
                    tickFormat={(tick) => `$${tick}`}
                /> 
                <VictoryAxis
                tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
              /> 
            </VictoryChart>
        )
    }
}
export default SavingsChart;