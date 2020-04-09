import React from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import {parseNumber} from './Table'
function addto(rawitems){
    let a = {};
    let items = rawitems.map(v=>({"date":v["date"],"fund":parseNumber(v['金额'])}))
    items.forEach(i=>{
        a[i['date']] = (a[i['date']]?a[i['date']]:0) + i['fund']
    })
    let data = Object.entries(a).map(([date,fund])=>({'date':date,'fund':fund}));
    console.log(data)
    return data.sort((a,b)=>(a['date']).localeCompare(b['date']))
}
function FundGraph({items,name}){
    let data = addto(items)
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
        </div>
    )
}

export default FundGraph;