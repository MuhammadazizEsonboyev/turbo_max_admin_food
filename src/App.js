import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Asadbek from './components/Asadbek/Asadbek'
import Users from './Users/Users'


export default function App() {




  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/asadbek' element={<Asadbek/>}/>
        </Routes>
      </Router>
    </>
  )
}
