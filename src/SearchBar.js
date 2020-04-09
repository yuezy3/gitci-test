import React from 'react';

function SearchBar({ report }) {
    let [rawItem, setRawItem] = React.useState("");
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault();report(rawItem.split(' ').filter(v => v)) }}>
                <label>搜索（可以输入多个姓名，用空格隔开）：</label>
                <input type="text" name="names" required
                    minLength="1" size="100" placeholder="输入姓名"
                    value={rawItem} onChange={e => setRawItem(e.target.value)}></input>
                <button type="submit">搜索</button>
            </form>

        </div>
    )
}

export default SearchBar;