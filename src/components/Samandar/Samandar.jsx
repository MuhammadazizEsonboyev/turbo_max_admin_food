import React from 'react'
import FooterS from './FooterS/FooterS'
import HeaderS from './HeaderS/HeaderS'
import NavbarS from './NavbarPageS/NavbarS'
import SectionCard from './SectionCard/SectionCard'
import SectionS from './SectionS/SectionS'

export default function Samandar() {
  return (
    <div>
      <NavbarS/>
      <HeaderS/>
      <SectionS/>
      <SectionCard/>
      <FooterS/>
    </div>
  )
}
