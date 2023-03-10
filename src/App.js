import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Asadbek from './components/Asadbek/Asadbek'
import Muhammadaziz from './components/Muhammadaziz/Muhammadaziz'
import Users from './Users/Users'

export default function App() {




  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Users/>}/>
            <Route path='/muhammadaziz' element={<Muhammadaziz/>}/>
            <Route path='/asadbek' element={<Asadbek/>}/>
          </Routes>
        </Router>
    </>
  )
}
