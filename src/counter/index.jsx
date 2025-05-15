import React, { useState } from 'react'
import Button from './button'
import './index.css'

function Main() {

    const [count, setCount] = useState(0)
    function Increase (){
        const newValue = count +1
        if(newValue > 10){
            alert("You have reached the maximum limit")
            return
        }
        setCount(newValue)
    }
    function Decrease(){
        const newValue = count -1
        if(newValue < 0){
            alert("You have reached the minimum limit")
            return
        }
        setCount(newValue)
    }
  return (
    <div className='main'>
      <Button click={Increase} title={"Increase"}/>
      <p className='value'>{count}</p>
      <Button click={Decrease} title={"Decrease"}/>
    </div>
  )
}

export default Main
