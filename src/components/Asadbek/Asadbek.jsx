import React from 'react'
import Footer from './General/Footer/Footer'
import Header from './General/Header/Header'
import LastSection from './General/LastSection/LastSection'
import NavBarPage from './General/Nav/NavBarPage'
import Section from './General/Section/MainSection'

export default function General() {
  return (
    <div>
      <NavBarPage/>
      <Header/>
      <Section/>
      <LastSection/>
      <Footer/>
    </div>
  )
}
