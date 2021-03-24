import React from 'react'
import './Door.css'
function Door({img,title}) {
    return (
        <div className='door'>
            <img src={img} alt='door' />
            <h3>{title}</h3>
        </div>
    )
}

export default Door
