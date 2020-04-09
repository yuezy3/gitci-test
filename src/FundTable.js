import React from 'react';
function toheader(ts){
    return <tr>{ts.map(i=>(<td>{i}</td>))}</tr>
}
function tobody(data,ts){
    return (
        <tr>
            {ts.map(i=>{
                let index = data.findIndex(e=>e['date']===i)
            return <td>{(index===-1?"未发现":data[index]["fund"])}</td>
            })}
        </tr> )
}
function FundTable({data}){
    let tableheaders = [
        (new Array(7)).fill().map((_,i)=>(`2016-${(i+6).toString().padStart(2,'0')}`)),
        (new Array(12)).fill().map((_,i)=>(`2017-${(i+1).toString().padStart(2,'0')}`)),
        (new Array(12)).fill().map((_,i)=>(`2018-${(i+1).toString().padStart(2,'0')}`)),
    ];
    return (
        <div>
            {tableheaders.map(ths=>(
                <table border="1">
                    <thead>{toheader(ths)}</thead>
                    <tbody>{tobody(data,ths)}</tbody>
                </table>
            ))}
        </div>
    )
}

export default FundTable;