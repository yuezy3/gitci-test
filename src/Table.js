import React from 'react';
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import {parseNumber} from './Util';

function Table({items}){
    let all_items = items;
    const columns = [
        { title: "来源", field: "date" , width: 70 },
        { title: "合同编号", field: "合同编号", width: 130 },
        { title: "姓名", field: "姓名", align: "left", width: 70 },
        { title: "日期", field: "日期" , width: 170 },
        { title: "金额", field: "金额", align: "center", widthGrow:1 },
        { title: "利率", field: "利率", align: "center", widthGrow:1 },
        { title: "天数", field: "天数", align: "center", widthGrow:1 },
        { title: "利息", field: "利息", align: "center", widthGrow:1 },
        { title: "帐管费", field: "帐管费", align: "center", widthGrow:1 },
        { title: "负责", field: "负责", align: "center", widthGrow:1 },
        { title: "其他1", field: "其他1", align: "center", widthGrow:4 },
      ];
    var data = all_items;
    //console.log(bigdata["陈伟"])
    return(
        <div>
            <ReactTabulator
                height={800}
                data={data}
                columns={columns}
                tooltips={true}
                options={{
                    layout:"fitColumns",
                    groupBy:"姓名",
                    groupHeader: function(value, count, data, group){
                        let sumlist = data.map(i=>i["利息"])
                                          .map(i=>parseNumber(i))
                        let sum = sumlist.reduce((acc,cur)=>acc+cur, 0)
                        let tips = sumlist.every(x=>x!==0)?"":"有需要手动检查"
                        return `${value} (${count}次击中) : ${sum} ${tips}`
                    }}}
                //groupBy={"姓名"}
                //groupHeader={function(value, count, data, group){return "value"}}
                //layout={"fitDataFill "}
                />
        </div>
    )
}

export default Table;