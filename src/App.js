import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Asadbek from './components/Asadbek/Asadbek'
import Behruz from './components/Behruz/Behruz'
import Bobur from './components/Bobur/Bobur'
import Muhammadaziz from './components/Muhammadaziz/Muhammadaziz'
import Qodirov from './components/QodirovDoston/Qodirov'
import Samandar from './components/Samandar/Samandar'
import Xurshid from './components/Xurshid/Xurshid'
import Users from './Users/Users'

export default function App() {

  return (
    <>
<<<<<<< HEAD
=======

    


>>>>>>> fcca79d03b5b12486e68c590849ca501c424bd8a
        <Router>
          <Routes>
            <Route path='/' element={<Users/>}/>
            <Route path='/muhammadaziz' element={<Muhammadaziz/>}/>
            <Route path='/asadbek' element={<Asadbek/>}/>
            <Route path='/samandar' element={<Samandar/>}/>
            <Route path='/doston-sila' element={<Qodirov/>}/>
            <Route path='/behruz-axi' element={<Behruz/>}/>
            <Route path='/xurshid-sila' element={<Xurshid/>}/>
            <Route path='/bobur' element={<Bobur/>}/>
          </Routes>
        </Router>
    </>
  )
}
