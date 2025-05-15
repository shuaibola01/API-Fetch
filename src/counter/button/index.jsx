import React from 'react'
import './index.css'

function Button({click, title}) {
  return (
    <div>
      <button className='btn' onClick={click}>{title}</button>
    </div>
  )
}

export default Button
