// 3MTT Final React Assesment
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from 'Project/Nav'
import Home from 'Project/Home'
import Add from 'Project/Add'

function App() {
  return (
    <div className='MainContainer'>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
