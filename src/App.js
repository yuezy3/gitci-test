import React from 'react';
import './App.css';

import NameList from './NameList'
import SearchBar from './SearchBar'
import Table from './Table'

import bigdata from './dump.json'
function allKey_flatten(bigdata){
  let names = [];
  for (let k in bigdata){
      names.push(k)
  }
  let flatted = [];
  function itemprocessing(obj){
      let other = Object.keys(obj).filter(k=>k.includes("其他")).map(k=>obj[k]).join(' ')
      obj["其他1"] = other
      return obj
  }
  for (let name of names){
      // in bigdata.name array, every item(object) "其他1" aggrate
      flatted.push(...(bigdata[name]).map(itemprocessing))
  }
  return [names, flatted];
}
let [all_names, all_items] = allKey_flatten(bigdata);

function search(nameList){
  return all_items.filter(row=>nameList.includes(row["姓名"]))
}
function App() {
  let [searchItems, setSearchItems] = React.useState(["艾秋生",]);
  let filted_items=search(searchItems);
  return (
    <div className="App">
      <NameList names={all_names}></NameList>
      <SearchBar report={setSearchItems}></SearchBar>
      <Table items={filted_items}></Table>
    </div>
  );
}

export default App;
