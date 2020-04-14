import React from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import FundTable from './FundTable'
import {items2array} from './Util'

function FundGraph({items,name}){
    let data = items2array(items)
    return (
        <div>
            <LineChart width={500} height={300} data={data} 
                margin={{top: 20, right: 30, left: 20, bottom: 5,}}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line name={name} type="monotone" dataKey="fund" stroke="#82ca9d" />
            </LineChart>
            <FundTable data={data}></FundTable>
        </div>
    )
}

export default FundGraph;