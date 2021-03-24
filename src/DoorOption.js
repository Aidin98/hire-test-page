import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react'
import './DoorOption.css'
function DoorOption({selected,imgselected,imgnotselected,title}) {
   const [checked, setChecked] = useState(selected);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }
  const img =checked ? imgselected : imgnotselected
  const isBold=checked ? 'bold' : 'lighter'
  console.log(selected)
    return (
        <div className='doorOption'>
            <img src={img} alt='dooroption' />
            <h4 style={{color:'grey',fontWeight:`${isBold}`}}>{title}</h4>
            <Checkbox
        defaultChecked
        checked={checked}
        onChange={handleChange}
        color="grey"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        </div>
    )
}

export default DoorOption

