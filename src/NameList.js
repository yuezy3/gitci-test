import React from 'react';
import { Collapse } from 'react-collapse';
import "./NameList.css"

function NameList({names}) {
    let [isOpened, setIsOpened] = React.useState(false)
    let buttons = names.map(v=>(<div className="namebutton">{v}</div>))
    return (
        <div>
            <label className="label">
                展开查看所有姓名：
                <input
                    className="input"
                    type="checkbox"
                    checked={isOpened}
                    onChange={() => setIsOpened(!isOpened)} />
            </label>
            <Collapse isOpened={isOpened}>
                <div>{buttons}</div>
            </Collapse>
        </div>
    )
}
export default NameList;