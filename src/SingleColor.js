import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(','); //rgb color-codes

  //generating the hexadecimal equivalent of the colors
  const hexColor = rgbToHex(...rgb);

  return ( 
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
    </article>
  )
}

export default SingleColor
