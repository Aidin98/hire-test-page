import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react'
import './TextureOption.css'
function TextureOption({selected,img}) {
     const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    return (
        <div className='textureOption'>
        <Checkbox
        defaultChecked={selected}
        color="grey"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <img src={img} alt='teture' />
        </div>
    )
}

export default TextureOption
