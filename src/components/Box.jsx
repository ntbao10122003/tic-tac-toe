import React from 'react';

import "../css/Box.css";

export const Box = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";

    return (
        <div className='grid grid-cols-3 gap-3'>
        <button className={style} onClick={onClick}>{value}</button>
        </div>
        
    )
}
