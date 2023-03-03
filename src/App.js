import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Asadbek from './components/Asadbek/Asadbek'
import ToplamApp from './components/Dostonjon/Doston'
import Xurshid from './components/Xurshid/Xurshid/Xurshid'
import Users from './Users/Users'


export default function App() {




  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/asadbek' element={<Asadbek/>}/>
          <Route path='/doston' element={<ToplamApp/>}/>
          <Route path='/xurshid' element={<Xurshid/>}/>

        </Routes>
      </Router>


 
    </>
  )
}
