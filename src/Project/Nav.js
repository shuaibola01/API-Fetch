import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='Nav'>
      <h1>To-do List</h1>
      <nav>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to ={'/Add/'}>Add To-do</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
