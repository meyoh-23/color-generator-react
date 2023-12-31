import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(','); //rgb color-codes

  //generating the hexadecimal equivalent of the colors
  const hexColor = rgbToHex(...rgb);

  // timeout to clear the 'copied to clipboad notification'
  useEffect(()=>{
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeOut);
  }, [alert])

  return ( 
    <article className={`color ${index > 10 && 'color-light'}`}
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hexColor)
    }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
